class UserInput {
    constructor(initialState, finalStates, states, alphabet, transitions) {
        this.initialState = initialState;
        this.finalStates = finalStates;
        this.states = states;
        this.alphabet = alphabet;
        this.transitions = transitions;
    }
}


$(document).ready(function () {
    console.log("aaaa");
    $("#probando2").hide();
    $("#probando3").hide();
    $("#probando4").hide();
    $("#probando5").hide();
    $("#probando6").hide();
    $("#seccionAuto3").hide();
    $("#auto1").click(function(){
        $("#probando6").hide(500);
        $("#probando2").hide(500);
        $("#probando1").show(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").hide(500);
        $("#seccionAuto3").hide(500);

    })
    $("#auto2").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").show(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").hide(500);
        $("#seccionAuto3").hide(500);

    })
    $("#funciones").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando4").hide(500);
        $("#probando3").show(500);
        $("#probando5").hide(500);
        $("#seccionAuto3").hide(500);

    })
    $("#btnConcatenacion").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando3").hide(500);
        $("#probando4").show(500);
        $("#seccionAuto3").hide(500);
        $("#probando5").hide(500);
    })
    $("#btnInterseccion").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#seccionAuto3").hide(500);
        $("#probando5").show(500);

    })
    $("#btnComplemento").click(function(){
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").hide(500);
        $("#seccionAuto3").hide(500);
        $("#probando6").show(500);
        


    })
    $("#auto3").click(function(){
        $("#probando6").hide(500);
        $("#probando1").hide(500);
        $("#probando2").hide(500);
        $("#probando3").hide(500);
        $("#probando4").hide(500);
        $("#probando5").hide(500);
        $("#seccionAuto3").show(500);
        

    })




    $("#new-transition").click(function () {

        let transitionsDiv = $("#nfa-transitions");
        let clone = $("#nfa-transitions .production-row").last().clone(true);

        clone.appendTo(transitionsDiv);

        $(".remove-button").show();

    });

    let removeButton = $(".remove-button");

    // Hide all remove buttons initially
    removeButton.hide();
    // Register onClick() event for remove buttons
    removeButton.click(function () {

        let parent = $(this).parent();
        let grandparent = parent.parent();

        parent.fadeOut(function () {
            $(this).remove();
        });

        if (grandparent.children().length <= 2) {
            $(".remove-button").hide();
        }

    });
    $(".production-row input").on('keypress', function (e) {
        if (e.which === 13) {
            $("#new-transition").click();
        }
    });

    $(".production-row input").on('keyup', function (e) {
        if (e.which !== 13) {
            $("#verify-update-debug").click();
        }
    });

    $("#initialStateInput").on('keyup', function (e) {
        $("#verify-update-debug").click();
    });

    $("#finalStatesInput").on('keyup', function (e) {
        $("#verify-update-debug").click();
    });

    $("#exampleBtn").click(function () {

        $("#initialStateInput").val('q0');
        $("#finalStatesInput").val('q1');

        let transitionsDiv = $("#nfa-transitions");
        let clone = $("#nfa-transitions .production-row").first().clone(true);

        transitionsDiv.children().each(function () {
            $(this).remove();
        });

/* ejemplo afd
        clone.find(".current-state-input").val('q0');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q1');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q0');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q2');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q0');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q2');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q1');
        clone.find(".input-symbol").val('');
        clone.find(".next-states").val('q3');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q2');
        clone.find(".input-symbol").val('b');
        clone.find(".next-states").val('q3');
        transitionsDiv.append(clone);

        clone = clone.clone(true);
        clone.find(".current-state-input").val('q3');
        clone.find(".input-symbol").val('a');
        clone.find(".next-states").val('q3');
        transitionsDiv.append(clone);
    */

   clone.find(".current-state-input").val('q0');
   clone.find(".input-symbol").val('a_E_x');
   clone.find(".next-states").val('q0');
   transitionsDiv.append(clone);

   clone = clone.clone(true);
   clone.find(".current-state-input").val('q0');
   clone.find(".input-symbol").val('E_E_E');
   clone.find(".next-states").val('q1');
   transitionsDiv.append(clone);

   clone = clone.clone(true);
   clone.find(".current-state-input").val('q1');
   clone.find(".input-symbol").val('b_x_E');
   clone.find(".next-states").val('q1');
   transitionsDiv.append(clone);


     
        $(".remove-button").show();
        $("#verify-update-debug").click();

    });

    $("#resetBtn").click(function () {
        $("#initialStateInput").val('');
        $("#finalStatesInput").val('');
        $(".remove-button").slice(1).click();
        $(".remove-button").hide();
        $("#nfa-transitions input").val('');
        $("#current-nfa").empty();
        $("#current-dfa").empty();
        $("#current-dfa-minimized").empty();
        $("#step-div").empty();
    });
    $("#Mostrar").click(function() {
        let user_input2= fetchUserInput2();
        let user_input = fetchUserInput();
        let UnionStr ="digraph fsm {\n";
        UnionStr+= "rankdir=LR;\n";
        UnionStr+= "size=\"8,5\";\n";
        UnionStr+= "node [shape = doublecircle]; " + user_input.finalStates +"," + user_input2.finalStates2 + ";\n";
        UnionStr+= "node [shape = point]; INITIAL_STATE\n";
        UnionStr+= "node [shape = circle];\n";
        UnionStr+="INITIAL_STATE -> " + "ini"+ ";\n";
        for (let transition of user_input.transitions)
            UnionStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        for (let transition of user_input2.transitions2)
            UnionStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        UnionStr+="" + "ini"+ " -> " + user_input2.initialState2 + " [label=" + 'E_E_E' + "];\n";
        UnionStr+="" + "ini"+ " -> " + user_input.initialState + " [label=" + 'E_E_E' + "];\n";
        UnionStr+="}";
        console.log(UnionStr);
        d3.select("#union-automatas").graphviz().zoom(false).renderDot(UnionStr);
        console.log('before');
        for(let x of user_input.transitions){
            console.log(user_input.transitions.indexOf(x));
        }

        

    })
    $("#showregex").click(function() {
        var debugc=0;
        var debugArray=[];
        console.log('ola');
        let user_input3=fetchUserInput3();
        user_input3.transitions3.push(new Transition('qi', user_input3.initialState3,'\u03BB' ));
        if(typeof(user_input3.finalStates3)==='string'){
            user_input3.transitions3.push(new Transition(user_input3.finalStates3, 'qf','\u03BB' ));
        }
        else{
            for(let x of user_input3.finalStates3){
                user_input3.transitions3.push(new Transition(x, 'qf','\u03BB' ));
            }
        }
        user_input3.initialState3='qi';
        user_input3.finalStates3='qf';
        console.log(user_input3.states3);
        console.log(user_input3.finalStates3);
        console.log(user_input3.transitions3);
        console.log(user_input3.initialState3);
        for(let estado of user_input3.states3){
            var ArregloIn=[];
            var ArregloOut=[];
            var auxTrans=[];
            /* creando entradas y salidas de cada estado*/
            for(let ins of user_input3.transitions3){
                if(ins.nextStates[0]==estado && ins.state!= estado && ArregloIn.includes(ins.state)==false){
                    ArregloIn.push(ins.state);
                }
            }
            for(let outs of user_input3.transitions3){
                if(outs.state==estado && outs.nextStates[0]!=estado && ArregloOut.includes(outs.nextStates[0])==false){
                    ArregloOut.push(outs.nextStates[0]);
                }
            }
            /* analizis 1 x 1 de ins y outs*/
            for(let ins of ArregloIn){
                for(let outs of ArregloOut){
                    var InIntermedio='';
                    var bucle='';
                    var IntermedioFinal='';
                    var transFinal='';
                    if(ins!=outs){
                        /*buscando todas las uniones parte 1*/
                        for(let sumEstados of user_input3.transitions3){
                            if(sumEstados.state==ins && sumEstados.nextStates[0]==estado){
                                InIntermedio=InIntermedio+sumEstados.symbol+'+';
                            }
                        }
                        InIntermedio= InIntermedio.slice(0, -1);
                        if(InIntermedio.includes('+') == true){
                        InIntermedio='('+InIntermedio+')';
                        }
                        /*buscando posibles loops*/
                        for(let sumBucles of user_input3.transitions3){
                            if(sumBucles.state==estado && sumBucles.nextStates[0]==estado ){
                                bucle=bucle+sumBucles.symbol+'+';
                            }        
                        }
                        if(bucle!=''){
                            bucle= bucle.slice(0, -1);
                            bucle="("+bucle+')*';
                        }
                        /*buscando todas las uniones parte 2*/
                        for(let unionFinal of user_input3.transitions3){
                            if(unionFinal.state==estado && unionFinal.nextStates[0]==outs){
                                IntermedioFinal=IntermedioFinal+unionFinal.symbol+'+';
                            }
                        }
                        IntermedioFinal= IntermedioFinal.slice(0, -1);
                        if(IntermedioFinal.includes('+')== true){
                        IntermedioFinal='('+IntermedioFinal+')';
                        }
                        transFinal=InIntermedio+bucle+IntermedioFinal;
                        auxTrans.push(new Transition(ins, outs,transFinal));
                    }
                    /*revision de loop entre 2 estados*/
                    else{
                        var LoopAux='';
                        var sumIns1='';
                        var sumIns2='';
                        var LoopFinal='';
                        for(let repetidosCheck of user_input3.transitions3){
                            if(repetidosCheck.state==estado && repetidosCheck.nextStates[0]==estado){
                                LoopAux=LoopAux+repetidosCheck.symbol+'+';
                            }
                        }
                        if(LoopAux !=''){
                            LoopAux=LoopAux.slice(0, -1);
                            LoopAux="("+LoopAux+')*';
                        }
                        /*revisando uniones desde in hasta intermedio*/
                        for(let sumEstados2 of user_input3.transitions3){
                            if(sumEstados2.state==ins && sumEstados2.nextStates[0]==estado){
                                sumIns1=sumIns1+sumEstados2.symbol+'+';                   
                            }
                        }
                        sumIns1 =sumIns1.slice(0, -1);
                        if(sumIns1.includes('+')){
                        sumIns1='('+sumIns1+')';
                        }
                        /*Revisando uniones desde intermedio hasta ins*/

                        for(let unionFinal2 of user_input3.transitions3){
                            if(unionFinal2.state==estado && unionFinal2.nextStates[0]==outs){
                                sumIns2=sumIns2 +unionFinal2.symbol+'+';
                            }
                        }
                        /*Insertando la nueva trans a el automata auxiliar*/
                        sumIns2= sumIns2.slice(0, -1);
                        if(sumIns2.includes('+')){
                        sumIns2='('+sumIns2+')';
                        }
                        LoopFinal=sumIns1+LoopAux+sumIns2;
                        auxTrans.push(new Transition(ins, outs,LoopFinal));                        
                        
                    }

                }
            }
            /*insertando transiciones nuevas*/
            var arregloprobar=[];
            for(let inserts of auxTrans){
                arregloprobar.push(inserts);
            }
            /*borrando transiciones antiguas*/
            for(let op of user_input3.transitions3){
                if(op.state!=estado && op.nextStates[0]!=estado ){
                    arregloprobar.push(op);
                }

            }
            user_input3.transitions3=arregloprobar;


            debugc++;
            debugArray=[];
            for(let elems of user_input3.transitions3){
                debugArray.push(elems);
            }
            console.log(ArregloIn);
            console.log(ArregloOut);
            console.log(estado);
            console.log(debugc);
            console.log(debugArray);

        }
        var regexDefenitivo='';
        for(let palabrasF of user_input3.transitions3){
            if(palabrasF.state=='qi'){
                regexDefenitivo=regexDefenitivo + palabrasF.symbol + ' + ';
            }
        }
        regexDefenitivo= regexDefenitivo.slice(0, -1);
        regexDefenitivo= regexDefenitivo.slice(0, -1);
        $("#showPalabra").empty();
        $("#showPalabra").append(regexDefenitivo);

        
    })
    $("#mostrarConcatenacion").click(function(){
        let user_input=fetchUserInput();
        let user_input2=fetchUserInput2();
        console.log(user_input.transitions);
        console.log(user_input.initialState);
        console.log(user_input.states);
        console.log(user_input.finalStates);
        user_input.transitions.push(new Transition('ini', user_input.initialState, 'E_E_P'));
        let aux1=user_input.finalStates;
        if(typeof(aux1)==='string'){
            user_input.states.push('int1');
            user_input.transitions.push(new Transition(aux1, 'int1', 'E_P_E'));
            user_input.transitions.push(new Transition('int1', user_input2.initialState2, 'E_E_E'));
        }
        else{
            let cont=0;
            var str2;
            for(let tr of user_input.finalStates){
                str2='init'+cont;
                user_input.transitions.push(new Transition(tr, str2, 'E_P_E'));
                user_input.transitions.push(new Transition(str2 ,user_input2.initialState2, 'E_E_E'));
                cont++;
            }
        }
        
        user_input.states.push('ini');
        user_input.initialState='ini';
        let  cStr="digraph fsm {\n";
        cStr+="size=\"8,5\";\n";
        cStr+= "node [shape = doublecircle]; "  + user_input2.finalStates2 + ";\n";
        cStr+= "node [shape = point]; INITIAL_STATE\n";
        cStr+= "node [shape = circle];\n";
        cStr+= "INITIAL_STATE -> " + user_input.initialState + ";\n";
        for (let transition of user_input.transitions)
            cStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        for (let transition of user_input2.transitions2)
            cStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";
        let sp= user_input.finalStates;
        console.log(typeof(sp));
        cStr+="}";
        d3.select("#concatenacion-automatas").graphviz().zoom(false).renderDot(cStr);

    })

    


    $("#verify-update-debug").click(function () {

        let user_input = fetchUserInput();

        let dotStr = "digraph fsm {\n";
        dotStr += "rankdir=LR;\n";
        dotStr += "size=\"8,5\";\n";
        dotStr += "node [shape = doublecircle]; " + user_input.finalStates + ";\n";
        dotStr += "node [shape = point]; INITIAL_STATE\n";
        dotStr += "node [shape = circle];\n";
        dotStr += "INITIAL_STATE -> " + user_input.initialState + ";\n";

        for (let transition of user_input.transitions)
            dotStr += "" + transition.state + " -> " + transition.nextStates + " [label=" + transition.symbol + "];\n";

        dotStr += "}";

        //document.getElementById('current-nfa-status').innerText = 'Rendering...';

        // TODO This render method throws an exception if the input is invalid
        // we should catch the exception and print an "invalid input" error to the user
        console.log(dotStr);
        d3.select("#current-nfa").graphviz().zoom(false).renderDot(dotStr);

        // Now that the preview is done, generate the DFA
        

    });

    $("#step-div").on("click", "button", function () {

        let step = $(this).data('step-number');

        $(this).parent().find("button").removeClass("active");
        $(this).addClass("active");

        let user_input = fetchUserInput();
        let dfa = generateDFA(new NFA(user_input.initialState, user_input.finalStates, user_input.states, user_input.alphabet, user_input.transitions), step);
        let dotStr = dfa.toDotString();

        d3.select("#current-dfa").graphviz().zoom(false).renderDot(dotStr);

        if (step !== (LAST_COMPLETED_STEP_COUNT + 1)) {

            $("#current-dfa-minimized").hide();

        } else {

            $("#current-dfa-minimized").show();

        }

    });



});


function fetchUserInput() {

    let initialState = $("#initialStateInput").val().trim();
    let finalStates = $("#finalStatesInput").val().trim();
    let states = [];
    let alphabet = [];
    let transitions = [];

    if (initialState.includes('{') || finalStates.includes('{')) {
        alert('State names cannot contain the \"{\" character!');
        return null;
    }

    $(".production-row").each(function () {

        let currentState = $(this).find(".current-state-input").val().trim();
        let inputSymbol = $(this).find(".input-symbol").val().trim();

        if (inputSymbol === '')
            inputSymbol = '\u03BB'; //lambda character

        let nextState = $(this).find(".next-states").val().trim();

        // TODO Better state validation?
        if (currentState.includes('{') || nextState.includes('{')) {
            alert('State names cannot contain the \"{\" character!');
            return;
        }

        transitions.push(new Transition(currentState, nextState, inputSymbol));

        // Populate alphabet without lambda
        if (inputSymbol !== '\u03BB' && !alphabet.includes(inputSymbol))
            alphabet.push(inputSymbol);

        if (!states.includes(currentState))
            states.push(currentState);

        if (!states.includes(nextState))
            states.push(nextState);

    });

    if (finalStates.includes(","))
        finalStates = finalStates.split(",");

    return new UserInput(initialState, finalStates, states, alphabet, transitions);
}

