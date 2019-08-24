const NOP = "NOP";
const STA = "STA";
const LDA = "LDA";
const ADD = "ADD";
const OR = "OR";
const AND = "AND";
const NOT = "NOT";
const JMP = "JMP";
const JN = "JN";
const JZ = "JZ";
const HLT = "HLT";
const OPS = [{code: 00, name: NOP},
            {code: 16, name: STA},
            {code: 32, name: LDA},
            {code: 48, name: ADD},
            {code: 64, name: OR},
            {code: 80, name: AND},
            {code: 96, name: NOT},
            {code: 128, name: JMP},
            {code: 144, name: JN},
            {code: 160, name: JZ},
            {code: 240, name: HLT},];


var ac = 0;
var pc = 0;
var z = false;
var n = false;
var curr_ac;
var bin1;
var fetched_data;
var bin2;
function changed(end){
    let content = document.getElementById(end).value;
    content = parseInt(content);
    let i = 0;
    let found = false;
    let is_data = false;
    if(parseInt(end) > 0){
        let before = document.getElementById("m"+(parseInt(end) - 1)).innerHTML;
        if(before == LDA || before == STA || before == JMP || before == JZ || before == JN
          || before == AND || before == OR || before == ADD){
              is_data = true;
          }
    }
    while(i < OPS.length && found == false && is_data == false){
        if(content == OPS[i].code){
            document.getElementById("m"+end).innerHTML = OPS[i].name;
            found = true;
        }
        i++;
    }
    if(found == false && is_data == false){
        document.getElementById("m"+end).innerHTML = NOP;
    }
    if(is_data == true){
        document.getElementById("m"+end).innerHTML = "DADO";
    }
}

function start(){
    let code  = createCodeArray();
    run(code);
}

async function run(code){
    for(pc = 0; pc < code.length; pc++){
        let instruction = translate(code[pc]);
        paint(pc);
        switch(instruction){
            case LDA:
                pc++;
                lda(pc);
            break;

            case STA:
                pc++;
                sta(pc);
            break;

            case HLT:
                pc = 500;
            break;

            case JMP:
                pc = fetch(pc + 1) - 1;
            break;

            case JN:
                if(n){
                    pc = fetch(pc + 1) - 1;
                }
            break;

            case JZ:
                if(z){
                    pc = fetch(pc + 1) - 1;
                }
            break;

            case OR:
                pc++;
                curr_ac = ac.toString();
                bin1 = (+curr_ac).toString(2);
                fetched_data = fetch(fetch(pc)).toString();
                bin2 = (+fetched_data).toString(2);
                ac = or(bin1, bin2);
            break;

            case NOT:
                curr_ac = ac.toString();
                bin1 = (+curr_ac).toString(2);
                ac = not(bin1);
            break;

            case AND:
                pc++;
                curr_ac = ac.toString();
                bin1 = (+curr_ac).toString(2);
                fetched_data = fetch(fetch(pc)).toString();
                bin2 = (+fetched_data).toString(2);
                ac = and(bin1, bin2);
            break;

            case ADD:
                pc++;
                curr_ac = ac;
                fetched_data = fetch(fetch(pc))
                ac = add(parseInt(curr_ac), parseInt(fetched_data));
            break;
        }


        update(ac, pc, z, n);
        await sleep(10);
    }
}

function paint(id){
    for(let i = 0; i < 256; i++){
        document.getElementById(i+"").style.background = "white";
    }
    document.getElementById(id+"").style.background = "yellow";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function update(ac, pc, z, n){
    let zt = 'false';
    let nt = 'false';
    document.getElementById("ac").innerHTML = ac;
    if(pc == 500){
        
    }else{
        document.getElementById("pc").innerHTML = pc;
    }
    if(z){
        zt = 'true';
    }
    if(n){
        nt = 'true';
    }
    document.getElementById("z").innerHTML = zt
    document.getElementById("n").innerHTML = nt
}
function translate(data){
    let i = 0;
    while(i < OPS.length){
        if(data == OPS[i].code){
            return OPS[i].name;
        }
        i++;
    }
    return NOP;
}

function createCodeArray(){
    let array = [];
    for(let i = 0; i < 256; i++){
        array.push(document.getElementById(i+"").value);
    }
    return array;
}

function expandByte(data){
    let out = data;
    while(out.length != 8){
        out = "0"+out;
    }
    return out;
}

function not(data){
    let str = expandByte(data).split("");
    let out = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] == '0'){
            out += '1';
        }else{
            out += '0';
        }
    }
    return parseInt(out, 2);
}

function or(current_ac, data){
    console.log(`Or de ${current_ac} com ${data}`)
    let byte1 = expandByte(current_ac).split('');
    let byte2 = expandByte(data).split('');
    let out = '';
    for(let i = 0; i < byte1.length; i++){
        if(byte1[i] == '0' && byte2[i] == '0'){
            out += '0';
        }else{
            out += '1';
        }
    }
    return parseInt(out, 2);
}

function add(ac, data){
    let s_ac = ac;
    let s_data = data;
    let result = (s_ac + s_data).toString();
    result = (+result).toString(2);
    if(result.length < 8){
        return parseInt(expandByte(result), 2);
    }else if(result.length == 8){
        return parseInt(result, 2);
    }else{

        let fragments = result.split('');
        let out = '';
        while(fragments.length > 8){

            fragments.shift();
        }

        for(let i = 0; i < fragments.length; i++){
            out += fragments[i];
        }
        return parseInt(out, 2);
    }
    

}

function and(ac, data){
    let byte1 = expandByte(ac).split('');
    let byte2 = expandByte(data).split('');
    let out = '';
    for(let i = 0; i < byte1.length; i++){
        if(byte1[i] == '1' && byte2[i] == '1'){
            out += '1';
        }else{
            out += '0';
        }
    }
    return parseInt(out, 2);
}

function lda(data){
    let temp = document.getElementById(data).value
    ac = document.getElementById(temp).value;
    if(ac > 127){
        n = true;
        z = false;
    }else if(ac == 0){
        z = true;
        n = false;
    }else{
        z = false;
        n = false;
    }
}

function sta(data){
    let temp = document.getElementById(data).value;
    document.getElementById(temp).value = ac;
}

function fetch(data){
    return document.getElementById(data).value;
}



