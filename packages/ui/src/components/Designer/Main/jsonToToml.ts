import {join} from "path";

const nav = (window.navigator as any);

function save(filename:string, data:any) {
    const blob = new Blob([data], {type: 'text/csv'});
    if(nav.msSaveOrOpenBlob) {
        nav.msSaveBlob(blob, filename);
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}



const converter = (fileName : string,json : {[index : string] : any}, tab : number, section : string) => {
    /*
    * fileName : Name of the output toml file.
    * json : Json dictionary to be converted into toml file.
    * tab : Is a number for tab adjustment.
    * section : adjustment on the toml file
    *
    *
    * This function takes a json object as input, and turns it into a toml file. It also saves the file with the input fileName.
    * */
    let toml : string = "";


    for (let key in json) {
        toml += "\t".repeat(tab);
        let value = json[key];
        if(typeof(value) == typeof(key)){
            toml += key + " = ";
            toml += "\"" + value.replace(/\n/gi,"\\n") + "\"" + "\n";
        }
        else{
            if(section == ""){
                toml += "[" + key + "]\n"
                toml += converter(fileName,value,tab + 1, key);
            }
            else{
                toml += "[" + section + "." + key  + "]\n"
                toml += converter(fileName,value,tab + 1, key);
            }
        }
    }

    if(tab == 0){
        save(fileName, toml);
    }
    return toml;
};


//console.log(converter("converted_example.toml",{"type" : "resume", "name" : "Goktug", "section1" : {"header" : "Education", "section2" : {"date" : "2018-2023(expected)", "text" : "Bachelor of Engineering - Computer Engineering\n Middle East Technical University\n- Ranked 1372nd, National University Examination (Top 0.1% in 2.5 million students)\nGPA : 3.18/4.0"}} },0,""))
export {converter};