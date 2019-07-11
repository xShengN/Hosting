using Newtonsoft.Json;
namespace Hotel.models
{
    public class Pather
    {
        [JsonProperty("id")]
        public int Id {get;set;}
         [JsonProperty("idHigh")]
         public int IdHigh {get;set;}
         [JsonProperty("name")]
         public string Name {get;set;}
         [JsonProperty("lastname")]
        public string LastName {get;set;}
         [JsonProperty("sex")]
         public string Sex {set;get;}
         [JsonProperty("dateborn")]
         public string DateBorn {get;set;}
    }
}