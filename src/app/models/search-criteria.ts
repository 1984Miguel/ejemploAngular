export class SearchCriteria {



constructor(
    private _terminalId: string,
    private _dateRecived: string)
    {}

     static newOfJson(json: any): SearchCriteria
    {
            return new SearchCriteria(
             json.terminalId,
             json.dateRecived);
    }    

      static nuevaColeccionDesdeJson(json: any[]): SearchCriteria[]{
        return json.map((searchCriteriaJson: any) : SearchCriteria =>{
            return SearchCriteria.newOfJson(searchCriteriaJson);
        });
    }  

}
