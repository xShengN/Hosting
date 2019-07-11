using Newtonsoft.Json;
namespace Hotel.models
{
    public class Room
    {
        [JsonProperty("id")]
        public int Id {get;set;}
        [JsonProperty("avidable")]
        public bool Avidable {get;set;}
        [JsonProperty("type")]
        public string Type {get;set;}
        
    }
}