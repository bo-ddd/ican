interface Options {
    el: HTMLElement;
}

export default class Markdown{
    el: HTMLElement;
    text: string;

    constructor(options: Options){
        this.el = options.el;
        this.text = this.el.textContent as string;
        this.transform(this.text);
    }

    public setText(text: string){
        this.text = text;
    }

    public isTitle(value: string){
        return /#+/.test(value);
    }

    public parseTitle(searchValue: string, groupValue: string): string{
        const match = /#+/.exec(searchValue);
        let type = match ? match[0].length + '' : '';
        return `<h${ type }>${ groupValue }</h${ type }>`;
    }

    public isParagraph(){
        return true;
    }

    public parseParagraph(text: string): string{
        return `<p>${ text.trim() }</p>`
    }

    public transform(text: string){
        let reg = /(?:#+\u0020+([^\u0020]+))|(?:([^#|^\u0020]+))/g;
        let _this = this;
        let res = text.replaceAll(reg, function(searchValue, groupValue): string{
            console.log(searchValue);
            console.log(groupValue);
            if(_this.isTitle(searchValue)){
                return _this.parseTitle(searchValue, groupValue);
            }else if(_this.isParagraph()){
                return _this.parseParagraph(searchValue);
            }
            return searchValue;
        })
        this.el.innerHTML = res;
    }
}