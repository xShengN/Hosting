using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
namespace Hotel.models
{
    public class Room
    {
        [JsonProperty("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id {get;set;}
        [JsonProperty("avidable")]
        public bool Avidable {get;set;}
        [JsonProperty("type")]
        public string Type {get;set;}
        
    }
}