using Newtonsoft.Json;
namespace Hotel.models
{
    public class Roomreser
    {
        [JsonProperty("id")]
        public int Id {get;set;}
        
         [JsonProperty("idRoom")]
        public int IdRoom {get;set;}
    }
}