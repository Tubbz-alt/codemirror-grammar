/**
*
*   CodeMirrorGrammar
*   @version: @@VERSION@@
*
*   Transform a grammar specification in JSON format, into a syntax-highlight parser mode for CodeMirror
*   https://github.com/foo123/codemirror-grammar
*
**/


// codemirror supposed to be available
var _CodeMirror = CodeMirror || { Pass : { toString: function(){return "CodeMirror.Pass";} } };

//
// parser factories
DEFAULTSTYLE = null;
DEFAULTERROR = "error";
var Parser = Class({
    constructor: function Parser( grammar, LOC ) {
        var self = this;
        
        self.$grammar = grammar;
        self.DEF = LOC.DEFAULT;
        self.ERR = grammar.Style.error || LOC.ERROR;
        
        // support comments toggle functionality
        self.LC = grammar.$comments.line ? grammar.$comments.line[0] : null;
        self.BCS = grammar.$comments.block ? grammar.$comments.block[0][0] : null;
        self.BCE = grammar.$comments.block ? grammar.$comments.block[0][1] : null;
        self.BCC = self.BCL = grammar.$comments.block ? grammar.$comments.block[0][2] : null;
    }
    
    ,$grammar: null
    ,DEF: null
    ,ERR: null
    ,LC: null
    ,BCS: null
    ,BCE: null
    ,BCL: null
    ,BCC: null
    
    ,dispose: function( ) {
        var self = this;
        self.$grammar = null;
        self.DEF = null;
        self.ERR = null;
        self.LC = null;
        self.BCS = null;
        self.BCE = null;
        self.BCL = null;
        self.BCC = null;
        return self;
    }
    
    ,parse: function( code, parse_type ) {
        code = code || "";
        var self = this, lines = code.split(newline_re), l = lines.length, i,
            linetokens, tokens, state, stream, ret, parse_errors, parse_tokens;
        
        parse_type = parse_type || TOKENS;
        parse_errors = !!(parse_type&ERRORS);
        parse_tokens = !!(parse_type&TOKENS);
        
        state = new State( 0, 0, parse_type );
        state.parseAll = 1;
        if ( parse_tokens )
        {
            linetokens = [];
            for (i=0; i<l; i++)
            {
                state.line = i; stream = new Stream( lines[i] );
                tokens = [];
                while ( !stream.eol() ) tokens.push( self.getToken( stream, state ) );
                linetokens.push( tokens );
            }
        }
        else //if ( parse_errors )
        {
            for (i=0; i<l; i++)
            {
                state.line = i; stream = new Stream( lines[i] );
                while ( !stream.eol() ) self.getToken( stream, state );
            }
        }
        if ( parse_tokens && parse_errors ) ret = {tokens:linetokens, errors:state.err};
        else if ( parse_tokens ) ret = linetokens;
        else ret = state.err;
        stream.dispose(); state.dispose();
        return ret;
    }
    
    // Codemirror Tokenizer compatible
    ,getToken: function( stream, state ) {
        var self = this, grammar = self.$grammar, Style = grammar.Style, DEFAULT = self.DEF, ERR = self.ERR,
            interleaved_comments = grammar.$interleaved, tokens = grammar.$parser, nTokens = tokens.length, 
            parseAll = !!state.parseAll, stack, pos, line, i, ci, type, tokenizer, action
        ;
        
        stream = parseAll ? stream : Stream._( stream );
        if ( parseAll )
        {
            if ( 0 === state.line ) state.status |= T_SOF;
            else state.status &= ~T_SOF;
        }
        else
        {
            if ( stream.sol() ) state.status |= T_SOF;
            else state.status &= ~T_SOF;
        }
        stack = state.stack;
        
        // if EOL tokenizer is left on stack, pop it now
        if ( stream.sol() && !stack.isEmpty() && T_EOL === stack.peek().type )
        {
            stack.pop();
        }
        
        // check for non-space tokenizer before parsing space
        if ( (stack.isEmpty() || (T_NONSPACE !== stack.peek().type)) && stream.spc() )
        {
            return parseAll ? {value:stream.cur(1), type:DEFAULT} : (stream.upd()&&DEFAULT);
        }
        
        line = state.line;
        while ( !stack.isEmpty() && !stream.eol() )
        {
            if ( interleaved_comments )
            {
                ci = 0;
                while ( ci < interleaved_comments.length )
                {
                    tokenizer = interleaved_comments[ci++];
                    type = tokenizer.get( stream, state );
                    if ( false !== type )
                    {
                        type = Style[type] || DEFAULT;
                        return parseAll ? {value:stream.cur(1), type:type} : (stream.upd()&&type);
                    }
                }
            }
            
            pos = stream.pos;
            tokenizer = stack.pop();
            type = tokenizer.get(stream, state);
            
            // match failed
            if ( false === type )
            {
                // error
                if ( tokenizer.status&REQUIRED_OR_ERROR )
                {
                    // empty the stack
                    stack.empty('$id', tokenizer.$id);
                    // skip this character
                    stream.nxt();
                    // generate error
                    type = ERR;
                    tokenizer.err(state, line, pos, line, stream.pos);
                    return parseAll ? {value:stream.cur(1), type:type} : (stream.upd()&&type);
                }
                // optional
                else
                {
                    continue;
                }
            }
            // found token (not empty)
            else if ( true !== type )
            {
                type = Style[type] || DEFAULT;
                // action token follows, execute action on current token
                while ( !stack.isEmpty() && T_ACTION === stack.peek().type )
                {
                    action = stack.pop();
                    action.get(stream, state);
                    // action error
                    /*if ( action.status&ERROR )
                    {
                        // empty the stack
                        //stack.empty('$id', tokenizer.$id);
                        // generate error
                        //action.err(state, line, pos, line, stream.pos);
                    }*/
                }
                return parseAll ? {value:stream.cur(1), type:type} : (stream.upd()&&type);
            }
        }
        
        for (i=0; i<nTokens; i++)
        {
            pos = stream.pos;
            tokenizer = tokens[i];
            type = tokenizer.get(stream, state);
            
            // match failed
            if ( false === type )
            {
                // error
                if ( tokenizer.status&REQUIRED_OR_ERROR )
                {
                    // empty the stack
                    stack.empty('$id', tokenizer.$id);
                    // skip this character
                    stream.nxt();
                    // generate error
                    type = ERR;
                    tokenizer.err(state, line, pos, line, stream.pos);
                    return parseAll ? {value:stream.cur(1), type:type} : (stream.upd()&&type);
                }
                // optional
                else
                {
                    continue;
                }
            }
            // found token (not empty)
            else if ( true !== type )
            {
                type = Style[type] || DEFAULT;
                // action token follows, execute action on current token
                while ( !stack.isEmpty() && T_ACTION === stack.peek().type )
                {
                    action = stack.pop();
                    action.get(stream, state);
                    // action error
                    /*if ( action.status&ERROR )
                    {
                        // empty the stack
                        //stack.empty('$id', tokenizer.$id);
                        // generate error
                        //action.err(state, line, pos, line, stream.pos);
                    }*/
                }
                return parseAll ? {value: stream.cur(1), type: type} : (stream.upd()&&type);
            }
        }
        
        // unknown, bypass
        stream.nxt();
        return parseAll ? {value:stream.cur(1), type:DEFAULT} : (stream.upd()&&DEFAULT);
    }
    
    ,indent: function(state, textAfter, fullLine, conf, parserConf) {
        var indentUnit = conf.indentUnit || 4, Pass = _CodeMirror.Pass;
        return Pass;
    }
});

// used for autocompletion
var W = /[\w$]/, by_score = function( a, b ) { return b.score-a.score };

function get_mode( grammar, DEFAULT ) 
{
    var parser = new Parser( parse_grammar( grammar ), { 
        // default return code for skipped or not-styled tokens
        // 'null' should be used in most cases
        DEFAULT: DEFAULT || DEFAULTSTYLE,
        ERROR: DEFAULTERROR
    });
    
    // Codemirror-compatible Mode
    var cm_mode = function cm_mode( conf, parserConf ) {
        
        // return the (codemirror) parser mode for the grammar
        return {
            /*
            // maybe needed in later versions..
            
            blankLine: function( state ) { },
            
            innerMode: function( state ) { },
            */
            
            startState: function( ) { 
                var state = new State( );
                return state;
            },
            
            copyState: function( state ) { 
                var statec = state.clone( );
                return statec;
            },
            
            token: function( stream, state ) { 
                return parser.getToken( stream, state ); 
            },
            
            indent: function( state, textAfter, fullLine ) { 
                return parser.indent( state, textAfter, fullLine, conf, parserConf ); 
            },
            
            // support comments toggle functionality
            lineComment: parser.LC,
            blockCommentStart: parser.BCS,
            blockCommentEnd: parser.BCE,
            blockCommentContinue: parser.BCC,
            blockCommentLead: parser.BCL,
            // support extra functionality defined in grammar
            // eg. code folding, electriChars etc..
            electricChars: parser.$grammar.$extra.electricChars || false,
            fold: parser.$grammar.$extra.fold || false
        };
    };
    cm_mode.supportGrammarAnnotations = false;
    // syntax, lint-like validator generated from grammar
    // maybe use this as a worker (a-la ACE) ??
    cm_mode.validator = function( code, options )  {
        if ( !cm_mode.supportGrammarAnnotations || !code || !code.length ) return [];
        
        var errors = [], err, msg, error,
            code_errors = parser.parse( code, ERRORS );
        if ( !code_errors ) return errors;
        
        for (err in code_errors)
        {
            if ( !code_errors.hasOwnProperty(err) ) continue;
            error = code_errors[err];
            errors.push({
                message: error[4] || "Syntax Error",
                severity: "error",
                from: CodeMirror.Pos(error[0], error[1]),
                to: CodeMirror.Pos(error[2], error[3])
            });
        }
        return errors;
    };
    // autocompletion helper extracted from the grammar
    // adapted from codemirror anyword-hint helper
    cm_mode.autocomplete = function( cm, options ) {
        var keywords = parser.$grammar.$autocomplete, list, Pos = _CodeMirror.Pos,
            cur = cm.getCursor(), curLine, start = cur.ch, end = start, 
            token, token_i, word, len, maxword = 0, maxtype = 0, word_re, renderer, 
            i, l, w, wm, wl, pos, pos_i, case_insensitive_match, prefix_match, m1, m2;
        list = [];
        if ( keywords && keywords.length )
        {
            options = options || {};
            word_re = options.word || W;
            case_insensitive_match = options[HAS]('caseInsensitiveMatch') ? !!options.caseInsensitiveMatch : true;
            prefix_match = !!options.prefixMatch;
            curLine = cm.getLine(cur.line);
            while (end < curLine.length && word_re.test(curLine.charAt(end))) ++end;
            while (start && word_re.test(curLine.charAt(start - 1))) --start;
            if ( start < end )
            {
                renderer = options.renderer || function(elt, data, cmpl) {
                    var word = cmpl.text, type = cmpl.meta, 
                        tabsize = data.list.maxlen-word.length-type.length+1+2,
                        tab = new Array(tabsize).join("&nbsp;"),
                        p1 = cmpl.start, p2 = cmpl.end;
                    elt.innerHTML = [
                        '<span class="cmg-autocomplete-keyword">', word.slice(0,p1),
                        '<strong class="cmg-autocomplete-keyword-match">', word.slice(p1,p2), '</strong>',
                        word.slice(p2), '</span>',
                        tab,
                        '<strong class="cmg-autocomplete-keyword-meta">', type, '</strong>'
                    ].join('');
                };
                token = curLine.slice(start, end); token_i = token.toLowerCase(); len = token.length;
                for (i=0,l=keywords.length; i<l; i++)
                {
                    word = keywords[i];
                    w = word.word; wm = word.meta; wl = w.length;
                    if ( wl < len ) continue;
                    if ( case_insensitive_match )
                    {
                        m1 = w.toLowerCase();
                        m2 = token_i;
                    }
                    else
                    {
                        m1 = w;
                        m2 = token;
                    }
                    if ( ((pos_i = m1.indexOf( m2 )) < 0) || (prefix_match && (pos_i > 0)) ) continue;
                    if ( case_insensitive_match ) pos = w.indexOf( token );
                    //else pos = pos_i;
                    if ( wl > maxword ) maxword = wl;
                    if ( wm.length > maxtype ) maxtype = wm.length;
                    list.push({
                        text: w, name: w, meta: wm,
                        start: pos<0?pos_i:pos, end: (pos<0?pos_i:pos) + token.length, match: token,
                        displayText: w + "\t\t["+wm+"]",
                        render: renderer,
                        // longer matches or matches not at start have lower match score
                        score: 1000 - 10*(wl-len) - 5*(pos<0?pos_i+3:pos)
                    });
                }
                if ( list.length ) list = list.sort( by_score );
                list.maxlen = maxword + maxtype; 
            }
        }
        return {
            list: list,
            from: Pos( cur.line, start ),
            to: Pos( cur.line, end )
        };
    };
    return cm_mode;
}

//
//  CodeMirror Grammar main class
/**[DOC_MARKDOWN]
*
* ###CodeMirrorGrammar Methods
*
* __For node:__
*
* ```javascript
* CodeMirrorGrammar = require('build/codemirror_grammar.js').CodeMirrorGrammar;
* ```
*
* __For browser:__
*
* ```html
* <script src="build/codemirror_grammar.js"></script>
* ```
*
[/DOC_MARKDOWN]**/
var CodeMirrorGrammar = exports['@@MODULE_NAME@@'] = {
    
    VERSION: "@@VERSION@@",
    
    // clone a grammar
    /**[DOC_MARKDOWN]
    * __Method__: `clone`
    *
    * ```javascript
    * cloned = CodeMirrorGrammar.clone( grammar [, deep=true] );
    * ```
    *
    * Clone (deep) a `grammar`
    *
    * Utility to clone objects efficiently
    [/DOC_MARKDOWN]**/
    clone: clone,
    
    // extend a grammar using another base grammar
    /**[DOC_MARKDOWN]
    * __Method__: `extend`
    *
    * ```javascript
    * extendedgrammar = CodeMirrorGrammar.extend( grammar, basegrammar1 [, basegrammar2, ..] );
    * ```
    *
    * Extend a `grammar` with `basegrammar1`, `basegrammar2`, etc..
    *
    * This way arbitrary `dialects` and `variations` can be handled more easily
    [/DOC_MARKDOWN]**/
    extend: extend,
    
    // pre-process a grammar (in-place)
    /**[DOC_MARKDOWN]
    * __Method__: `pre_process`
    *
    * ```javascript
    * CodeMirrorGrammar.pre_process( grammar );
    * ```
    *
    * This is used internally by the `CodeMirrorGrammar` Class `parse` method
    * In order to pre-process, in-place, a `JSON grammar` 
    * to transform any shorthand configurations to full object configurations and provide defaults.
    [/DOC_MARKDOWN]**/
    pre_process: pre_process_grammar,
    
    // parse a grammar
    /**[DOC_MARKDOWN]
    * __Method__: `parse`
    *
    * ```javascript
    * parsedgrammar = CodeMirrorGrammar.parse( grammar );
    * ```
    *
    * This is used internally by the `CodeMirrorGrammar` Class
    * In order to parse a `JSON grammar` to a form suitable to be used by the syntax-highlight parser.
    * However user can use this method to cache a `parsedgrammar` to be used later.
    * Already parsed grammars are NOT re-parsed when passed through the parse method again
    [/DOC_MARKDOWN]**/
    parse: parse_grammar,
    
    // get a codemirror syntax-highlight mode from a grammar
    /**[DOC_MARKDOWN]
    * __Method__: `getMode`
    *
    * ```javascript
    * mode = CodeMirrorGrammar.getMode( grammar [, DEFAULT] );
    * ```
    *
    * This is the main method which transforms a `JSON grammar` into a `CodeMirror` syntax-highlight parser.
    * `DEFAULT` is the default return value (`null` by default) for things that are skipped or not styled
    * In general there is no need to set this value, unless you need to return something else
    [/DOC_MARKDOWN]**/
    getMode: get_mode
};
