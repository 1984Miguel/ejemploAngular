export class ShownList {

      constructor(
        private _terminalID: string,
        private _type: string,
        private _dateReciced: Date, 
        private _downlodStatement: String
    )
    {}

       static newOfJson(json: any): ShownList
    {
            return new ShownList(
            json._terminalID,
            json._type,
            json._dateReciced,
            json._downlodStatement
            )
    }    

      static nuevaColeccionDesdeJson(json: any[]): ShownList[]{
        return json.map((shownListJson: any) : ShownList =>{
            return ShownList.newOfJson(shownListJson);
        });
    }  

}
