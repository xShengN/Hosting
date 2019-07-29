using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
namespace Hotel.models
{
    public class Roomreser
    {
        [JsonProperty("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id {get;set;}
        
         [JsonProperty("idRoom")]
        public int IdRoom {get;set;}
    }
}