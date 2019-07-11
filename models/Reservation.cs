using Newtonsoft.Json;
namespace Hotel.models
{
    public class Reservation
    {
        [JsonProperty("id")]
        public int Id {get;set;}
        [JsonProperty("name")]
        public string Name {get;set;}
        [JsonProperty("lastname")]
        public string Lastname {get;set;}
        [JsonProperty("sex")]
        public string Sex {get;set;}
        [JsonProperty("datein")]
        public string DateIn {get;set;}
        [JsonProperty("dateout")]
        public string Dateout {get;set;}
        [JsonProperty("typeroom")]
        public string TypeRoom {get;set;}

    }
}