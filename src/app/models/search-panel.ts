export class SearchPanel {

      constructor(

       
        
         // cambiar a tipo acount
        private _acount :string,
        private _region :string,
        private _city :string,
        private _terminalID :string,
        private _terminalName :string,
        private _location :string,
        private _phone :string,
        private _mobileNumber :string,
        private _faxNumbery :string


    ){}




    static newOfJson(json: any): SearchPanel
    {
            return new SearchPanel(
                json.acount,
                json.region,
                json.city,
                json.terminalID,
                json.terminalName,
                json.location,
                json.phone,
                json.mobileNumber,
                json.faxNumery)
    }           

    static nuevaColeccionDesdeJson(json: any[]): SearchPanel[]{
        return json.map((searchPanelJson: any) : SearchPanel =>{
            return SearchPanel.newOfJson(searchPanelJson);
        });
    }            

            

}