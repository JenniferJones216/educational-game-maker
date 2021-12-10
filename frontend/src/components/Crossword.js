import * as CONSTANTS from "../components/constants";



export default {
    displayCrossword,
    crosswordFunctions
}

function displayCrossword() {
    return `
    <div class="row info margin-bottom-sm">
    <h1 id= "crosswordTitle"class="col-md-12"></h1>
    <div class="col-md-12">
        <button class="btn" id="btnReset">Reset <i class="fas fa-redo"></i></button>
        <button class="btn " id="btnCheck">Check Answers <i
                class="far fa-check-circle"></i></button>
        <button class="btn" id="btnHint" data-toggle="tooltip"
            title="Add a few letters to each word">Hint <i class="far fa-smile-wink"></i></button>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <!-- Create & Play buttons required for user generated crossword - disabled for Proscribed questions -->
    </div>
    <div class="col-lg-12 text-center wjec-crossword" id="crossword"></div>

    <div id= "crosswordAllClues" class="wjec-crossword-clues col-lg-6 margin-bottom-md">
        <h3>ACROSS</h3>
        <div class="clueBlock" id="cluesAcross">
            <div class="clueDirection" id="directionAcross"></div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

            <div class="line">
                <input class="word" type="text" />
                <span class="lineNum"></span>
                <input class="clue" />
            </div>

        </div>
    </div>

    <div class="wjec-crossword-clues col-lg-6 margin-bottom-md">
        <h3>DOWN</h3>
        <div class="clueBlock" id="cluesDown">
            <div class="clueDirection" id="directionDown"></div>
        </div>
    </div>

</div>
    `;
}


async function crosswordFunctions(id) {
    const orderArr = [];
     const dataCrossword = await fetch(CONSTANTS.CrosswordURL+"/" + id)
    .then(response => response.json())
    const data = dataCrossword.crosswordQuestions;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function init() {
        $.each(data, function (index) {
            orderArr.push(index);
            shuffle(orderArr);
        });
        loadClues()
    };

    init();

    function loadClues() {
        for (let i = 0; i < Math.min(data.length,25); i++) {
            console.log(data);
            console.log(orderArr);
            $(".line").eq(i).find("input.word").attr("value", data[orderArr[i]].answer);
            $(".line").eq(i).find("input.clue").attr("value", data[orderArr[i]].clue);
        }
    };



    //---------------------------------//
    //   GLOBAL VARIABLES              //
    //---------------------------------//
    let board, wordArr, wordBank, wordsActive, boardMap, clues,
        focusChar, focusIndex = null,
        wordElementsAcross, wordElementsDown;

    const Bounds = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,

        Update: function (x, y) {
            this.top = Math.min(y, this.top);
            this.right = Math.max(x, this.right);
            this.bottom = Math.max(y, this.bottom);
            this.left = Math.min(x, this.left);
        },

        Clean: function () {
            this.top = 999;
            this.right = 0;
            this.bottom = 0;
            this.left = 999;
        }
    };

    //---------------------------------//
    //   MAIN                          //
    //---------------------------------//

    function Play() {
        const charEleArr = document.getElementsByClassName('char');

        for (let i = 0; i < charEleArr.length; i++) {
            //register character click and focus events
            RegisterChar(charEleArr[i], boardMap[i]);
            charEleArr[i].placeholder = "";
        }

        HideInputBoxes();

        FormatClues();
    }


    function createClueHTML(wordElement) {

        //create clue holder
        const clueElement = document.createElement('div');
        clueElement.className += " line";

        //add line number
        const lineNumSpan = document.createElement('span');
        lineNumSpan.innerHTML = wordElement.num + '. ';
        lineNumSpan.className += " lineNum";

        //add clue
        const clueSpan = document.createElement('span');
        clueSpan.innerHTML = wordElement.clue;
        clueSpan.className += " cluesentence";

        //add word count
        const wordCountSpan = document.createElement('span');
        wordCountSpan.innerHTML = ' (' + wordElement.wordCount + ')';
        wordCountSpan.className += " wordCount";

        clueElement.appendChild(lineNumSpan);
        clueElement.appendChild(clueSpan);
        clueElement.appendChild(wordCountSpan);

        return clueElement;
    }

    function FormatClues() {

        const cluesAcross = document.getElementById("cluesAcross");
        const cluesDown = document.getElementById("cluesDown");

        cluesAcross.innerHTML = "";
        cluesDown.innerHTML = "";

        let clueElement = "";

        for (let i = 0; i < wordElementsAcross.length; i++) {

            clueElement = createClueHTML(wordElementsAcross[i]);
            cluesAcross.appendChild(clueElement);

        }

        for (let j = 0; j < wordElementsDown.length; j++) {

            clueElement = createClueHTML(wordElementsDown[j]);
            cluesDown.appendChild(clueElement);

        }

    }

    function Generate() {
        wordElementsAcross = [];
        wordElementsDown = [];

        CleanVars();
        let canBuild = PopulateBoard();
        let attempts = 0;
        while (!canBuild && attempts < 10) {

            CleanVars();
            canBuild = PopulateBoard();
            attempts++;
        }
        console.log(attempts + " attempts");

        document.getElementById("crossword").innerHTML =
            canBuild ? BoardToHtml() : "Failed to find crossword.";

        document.getElementById('btnHint').classList.remove('disabled');
    }

    function HideInputBoxes() {
        const w = document.getElementsByClassName('word'),
            d = document.getElementsByClassName('clue'),
            dir = document.getElementsByClassName('clueDirection'),
            char = document.getElementsByClassName('char');

        for (let i = 0; i < w.length; i++) {
            AddClass(w[i], 'hide');
            AddClass(d[i], 'hide');
            AddClass(d[i], 'clueReadOnly');

            d[i].disabled = 'readonly';
        }

        for (let i = 0; i < dir.length; i++) {
            RemoveClass(dir[i], 'disabled');
        }

        for (let i = 0; i < char.length; i++) {
            RemoveClass(char[i], 'charReadOnly');
            char[i].disabled = '';
        }

    }

    function hasWhiteSpace(s) {
        return /\s/g.test(s);
    }
  
    function getWordCount(word) {

        if (hasWhiteSpace(word)) {
            const words = word.split(/\s/g);
            let wordCount = "";

            for (let i = 0; i < words.length; i++) {
                //last word
                if (i === words.length - 1) {
                    wordCount = wordCount + words[i].length;
                }
                //other words
                else {
                    wordCount = wordCount + words[i].length + ', ';
                }
            }
            return wordCount;
        } else {
            return word.length.toString();
        }

    }

    function GetWordsFromInput() {

        const clues = document.getElementsByClassName("line");

        wordArr = [];

        for (let i = clues.length - 1; i >= 0; i--) {

            const val = clues[i].getElementsByClassName("word")[0].value.toUpperCase();
            const clue = clues[i].getElementsByClassName("clue")[0].value;
            const wordCount = getWordCount(val);
            if (val !== null && val.length > 1) {
                wordArr.push({
                    ele: clues[i],
                    value: val.replace(' ', ''),
                    clue: clue,
                    wordCount: wordCount

                });
            }
        }
    }

    function CleanVars() {
        Bounds.Clean();
        wordBank = [];
        wordsActive = [];
        clues = [];
        board = [];

        for (let i = 0; i < 50; i++) {
            board.push([]);
            for (let j = 0; j < 50; j++) {
                board[i].push({
                    value: null,
                    char: []
                });
            }
        }
    }

    function PopulateBoard() {

        PrepareBoard();

        let boardisValid = false;
        const len = wordBank.length;

        for (let i = 0; i < len; i++) {

            boardisValid = AddWordToBoard();

            if (!boardisValid) {
                return boardisValid;
            }

        }

        return boardisValid;
    }

 
    function createcObj(currentWordIndex, prevObj, currentChar) {

        return {
            wordIndex: currentWordIndex,
            prev: prevObj,
            value: currentChar,
            next: null
        };

    }

    function PrepareBoard() {
        wordBank = [];

        for (let i = 0, len = wordArr.length; i < len; i++) {

            wordBank.push(new WordObj(wordArr[i]));

        }

        for (let i = 0; i < wordBank.length; i++) {
            for (let j = 0, wA = wordBank[i]; j < wA.char.length; j++) {
                for (let k = 0, cA = wA.char[j]; k < wordBank.length; k++) {
                    for (let l = 0, wB = wordBank[k]; k !== i && l < wB.char.length; l++) {
                        wA.totalMatches += (cA === wB.char[l]) ? 1 : 0;
                    }
                }
            }
        }
    }


    function AddWordToBoard() {
        let i, len, curIndex, curWord, curChar, testWord, testChar, minMatchDiff = 9999,
            curMatchDiff;

        //first word
        if (wordsActive.length < 1) {
            curIndex = 0;
            for (let i = 0, len = wordBank.length; i < len; i++) {
                if (wordBank[i].totalMatches < wordBank[curIndex].totalMatches) {
                    curIndex = i;
                }
            }
            wordBank[curIndex].successfulMatches = [{
                x: 12,
                y: 12,
                dir: 0
            }];
        }
        //others
        else {
            curIndex = -1;

            for (let i = 0, len = wordBank.length; i < len; i++) {
                curWord = wordBank[i];
                curWord.effectiveMatches = 0;
                curWord.successfulMatches = [];
                for (let j = 0, lenJ = curWord.char.length; j < lenJ; j++) {
                    curChar = curWord.char[j];
                    for (let k = 0, lenK = wordsActive.length; k < lenK; k++) {
                        testWord = wordsActive[k];
                        for (let l = 0, lenL = testWord.char.length; l < lenL; l++) {
                            testChar = testWord.char[l];
                            if (curChar === testChar) {
                                curWord.effectiveMatches++;
                                let curCross = {
                                    x: testWord.x,
                                    y: testWord.y,
                                    dir: 0
                                };
                                if (testWord.dir === 0) {
                                    curCross.dir = 1;
                                    curCross.x += l;
                                    curCross.y -= j;
                                } else {
                                    curCross.dir = 0;
                                    curCross.y += l;
                                    curCross.x -= j;
                                }

                                let isMatch = true;

                                for (let m = -1, lenM = curWord.char.length + 1; m < lenM; m++) {
                                    let crossVal = [];
                                    if (m !== j) {
                                        if (curCross.dir === 0) {
                                            const xIndex = curCross.x + m;

                                            if (xIndex < 0 || xIndex > board.length - 1) {
                                                isMatch = false;
                                                break;
                                            }

                                            crossVal.push(board[xIndex][curCross.y].value);
                                            crossVal.push(board[xIndex][curCross.y + 1].value);
                                            crossVal.push(board[xIndex][curCross.y - 1].value);

                                        } else {
                                            const yIndex = curCross.y + m;

                                            if (yIndex < 0 || yIndex > board[curCross.x].length - 1) {
                                                isMatch = false;
                                                break;
                                            }

                                            if (typeof board[curCross.x] == 'undefined') {
                                                console.error(board[curCross.x]);
                                            }
                                            if (typeof board[curCross.x][yIndex] == 'undefined') {
                                                console.error(board[curCross.x][yIndex]);
                                            }

                                            crossVal.push(board[curCross.x][yIndex].value);
                                            crossVal.push(board[curCross.x + 1][yIndex].value);
                                            crossVal.push(board[curCross.x - 1][yIndex].value);
                                        }

                                        if (m > -1 && m < lenM - 1) {
                                            if (crossVal[0] !== curWord.char[m]) {
                                                if (crossVal[0] !== null) {
                                                    isMatch = false;
                                                    break;
                                                } else if (crossVal[1] !== null) {
                                                    isMatch = false;
                                                    break;
                                                } else if (crossVal[2] !== null) {
                                                    isMatch = false;
                                                    break;
                                                }
                                            }
                                        } else if (crossVal[0] !== null) {
                                            isMatch = false;
                                            break;
                                        }
                                    }
                                }

                                if (isMatch === true) {
                                    curWord.successfulMatches.push(curCross);
                                }
                            }
                        }
                    }
                }

                curMatchDiff = curWord.totalMatches - curWord.effectiveMatches;

                if (curMatchDiff < minMatchDiff && curWord.successfulMatches.length > 0) {
                    curMatchDiff = minMatchDiff;
                    curIndex = i;
                } else if (curMatchDiff <= 0) {
                    return false;
                }

            }
        }

        if (curIndex === -1) {
            return false;
        }

        const word = wordBank.splice(curIndex, 1);

        const currentWordActive = updateWordInfo(word);

        wordsActive.push(currentWordActive);

        const wordisAdded = addCharInfoToBoard(currentWordActive);

        if (!wordisAdded) {
            return false;
        }

        if (Bounds.right >= 37) {
            // console.log('%cCrossword is too wide', 'color:red;font-size: 16px;');
            return false;
        }

        return true;

    }
    /*
     * @param {Number} word - index of the current word 
     * @return {Object} activeWord 
     */
    function updateWordInfo(activeWord) {

        const currentActiveWord = activeWord[0];

        const matchArr = currentActiveWord.successfulMatches;
        const matchIndex = Math.floor(Math.random() * matchArr.length);
        const matchData = matchArr[matchIndex];

        currentActiveWord.x = matchData.x;
        currentActiveWord.y = matchData.y;
        currentActiveWord.dir = matchData.dir;

        return currentActiveWord;
    }

    function addCharInfoToBoard(currentWordActive) {

        const pushIndex = wordsActive.length - 1;

        let prevObj = null;

        for (let i = 0; i < currentWordActive.char.length; i++) {

            let xInd = currentWordActive.x;
            let yInd = currentWordActive.y;

            if (currentWordActive.dir === 0) {
                xInd = xInd + i;
            } else {
                yInd = yInd + i;
            }

            if (xInd >= 36) {
            
                return false;
            }

            const cObj = createcObj(pushIndex, prevObj, currentWordActive.char[i]);

            const cIndex = board[xInd][yInd].char.length;

            board[xInd][yInd].char.push(cObj);
            board[xInd][yInd].value = currentWordActive.char[i];

            Bounds.Update(xInd, yInd);

            if (prevObj !== null) {
                prevObj.next = board[xInd][yInd].char[cIndex];
            }

            prevObj = board[xInd][yInd].char[cIndex];
        }

        prevObj = null;
        return true;

    }

    function BoardToHtml() {

        boardMap = [];

        let boardHTML = '';

        for (let i = Bounds.top - 1; i < Bounds.bottom + 2; i++) {
            boardHTML += "<div class='row'>";

            for (let j = Bounds.left - 1; j < Bounds.right + 2; j++) {
                boardHTML += BoardCharToElement(board[j][i]);
            }
            boardHTML += "</div>";
        }
        return boardHTML;

    }

    function BoardCharToElement(c) {

        let inner = "";

        if (c.value !== null) {
            let num = "";

            for (let i = 0; i < c.char.length; i++) {

                let currentChar = c.char[i];
                currentChar.index = boardMap.length;
                if (currentChar.prev === null) {

                    let currentwordIndex = currentChar.wordIndex;

                    if (num === "") {
                        num = wordElementsDown.length + wordElementsAcross.length + 1;
                    }

                    if (wordsActive[currentwordIndex].dir === 0) {
                        wordElementsAcross.push({
                            num: num,
                            ele: wordsActive[currentwordIndex].element,
                            clue: wordsActive[currentwordIndex].clue,
                            answer: wordsActive[currentwordIndex].string,
                            wordCount: wordsActive[currentwordIndex].wordCount
                        });
                    } else {
                        wordElementsDown.push({
                            num: num,
                            ele: wordsActive[currentwordIndex].element,
                            clue: wordsActive[currentwordIndex].clue,
                            answer: wordsActive[currentwordIndex].string,
                            wordCount: wordsActive[currentwordIndex].wordCount
                        });
                    }
                }
            }
            boardMap.push(c);

            inner = EleStr('input', [{
                a: 'type',
                v: ['text']
            }, {
                a: 'class',
                v: ['char']
            }, {
                a: 'maxlength',
                v: ['1']
            }, {
                a: 'data-letter',
                v: [c.value]
            }, {
                a: 'data-hint',
                v: [c.value]
            }, {
                a: 'placeholder',
                v: [c.value]
            }],
                EleStr('span', [{
                    a: 'class',
                    v: ['num']
                }], num));
        }
        return EleStr('div', [{
            a: 'class',
            v: ['square']
        }], inner);
    }

    function BoardCharClick(boardChar) {

        if (boardChar.char.length > 1) {
            if (focusIndex >= boardChar.char.length - 1) {
                focusIndex = 0;
            } else {
                focusIndex++;
            }
        }
    }

    function BoardCharFocus(boardChar) {

        if (!(boardChar.char[focusIndex] && boardChar.char[focusIndex].prev === focusChar)) {
            focusIndex = Math.max(0, boardChar.char.indexOf(focusChar));
        }

        const inputBoxes = document.getElementsByClassName('char');

        //navigation via arrow keys
        this.onkeydown = function (e) {

            let key = e.keyCode || e.which;

            //left arrow or up - focus on prev square
            if (key === 37 || key === 38) {
                if (boardChar.char[focusIndex].prev != null) {
                    focusChar = boardChar.char[focusIndex].prev;
                    inputBoxes[focusChar.index].focus();
                }
            }

            //right arrow or down - focus on next square
            if (key === 39 || key === 40) {
                if (boardChar.char[focusIndex].next != null) {
                    focusChar = boardChar.char[focusIndex].next;
                    inputBoxes[focusChar.index].focus();
                }
            }

        };

        this.onkeyup = function (e) {

            let key = e.keyCode || e.which;

            let prevChar = boardChar.char[focusIndex].prev;

            //backspace and not first letter
            if (key === 8 && prevChar != null) {
                RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');
                inputBoxes[prevChar.index].focus();

            }
            //backspace and is first letter
            if (key === 8 && prevChar === null) {
                RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');
            }

        };

        this.oninput = function (e) {

            let nextChar = boardChar.char[focusIndex].next;

            //backspace at end of word
            if (e.inputType === 'deleteContentBackward' && nextChar === null) {

                inputBoxes[boardChar.char[focusIndex].index].value = "";

                RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');

            }

            //normal text entry
            if (e.inputType !== 'deleteContentBackward' && nextChar !== null) {

                inputBoxes[nextChar.index].focus();

                RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');

            }

        };
    }

    //---------------------------------//
    //   OBJECT DEFINITIONS            //
    //---------------------------------//

    function WordObj(wordData) {
        this.element = wordData.ele;
        this.string = wordData.value;
        this.char = wordData.value.split("");
        this.totalMatches = 0;
        this.effectiveMatches = 0;
        this.successfulMatches = [];
        this.clue = wordData.clue;
        this.wordCount = wordData.wordCount;
    }

    //---------------------------------//
    //   EVENTS                        //
    //---------------------------------//

    function RegisterEvents() {

        document.getElementById("btnReset").addEventListener(
            'click',
            function () {
                Generate();
                Play();

            }, false);

    }
    RegisterEvents();

    function RegisterChar(ele, boardChar) {
        ele.onclick = CreateCallback("click", boardChar);
        ele.onfocus = CreateCallback("focus", boardChar);
    }

    function CreateCallback(type, boardChar) {
        switch (type) {
            case "click":
                return function () {
                    BoardCharClick(boardChar);
                };
            case "focus":
                return function () {
                    BoardCharFocus(boardChar);
                };
        }
    }

    //---------------------------------//
    //   HELPER FUNCTIONS              //
    //---------------------------------//

    function EleStr(e, c, h) {
        h = (h) ? h : "";
        for (var i = 0, s = "<" + e + " "; i < c.length; i++) {
            s += c[i].a + "='" + ArrayToString(c[i].v, " ") + "' ";
        }
        return (s + ">" + h + "</" + e + ">");
    }

    function ArrayToString(a, s) {
        if (a === null || a.length < 1) return "";
        if (s === null) s = ",";
        for (var r = a[0], i = 1; i < a.length; i++) {
            r += s + a[i];
        }
        return r;
    }

    function AddClass(ele, classStr) {
        ele.className = ele.className.replaceAll(' ' + classStr, '') + ' ' + classStr;
    }

    function RemoveClass(ele, classStr) {
        ele.className = ele.className.replaceAll(' ' + classStr, '');
    }

    function ToggleClass(ele, classStr) {
        var str = ele.className.replaceAll(' ' + classStr, '');
        ele.className = (str.length === ele.className.length) ? str + ' ' + classStr : str;
    }

    String.prototype.replaceAll = function (replaceThis, withThis) {
        var re = new RegExp(replaceThis, "g");
        return this.replace(re, withThis);
    };

    //==================================================//

    $("#btnCheck").on('click', function () {
        $(this).blur();
        //clear values from incorrect boxes
        $(".square input").each(function () {
            if ($(this).attr('data-letter') !== $(this).val().toUpperCase()) {
                $(this).val('');
                $(this).removeClass('correct');
                $(this).effect("highlight", { color: 'red' }, 2000);

            } else {
                $(this).addClass('correct');
            }
        });
    });

    $('#btnHint').on('click', function () {
        // Change this number to reveal more or less answers
        var hintFrequency = 8;

        $(this).addClass('disabled');

        var hints = $("[data-letter]").filter(function (index) {
            return (index + 1) % hintFrequency == 0;
        });

        hints.each(function () {
            $(this).val($(this).attr('data-letter')).addClass('correct');

        });
    });

    $(function () {
        GetWordsFromInput();
        Generate();
        Play();
    });

}