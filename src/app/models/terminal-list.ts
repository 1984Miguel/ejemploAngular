export class TerminalList {

     constructor(

        private _terminalName :string,
        private _terminalID :string,
        private _account :string,
        private _city :string,
        private _phone :string,
        private _location? :string,
        private _region? :string)
    {}

    static newOfJson(json: any): TerminalList
    {
        return new TerminalList(
            json._terminalName,
            json._terminalID,
            json._account,
            json._city,
            json._phone,
            json.location,
            json._region)
    }    

    static nuevaColeccionDesdeJson(json: any[]): TerminalList[]{
         return json.map((TerminalListJson: any) : TerminalList =>{
            return TerminalList.newOfJson(TerminalList);
        });
    }  


}
