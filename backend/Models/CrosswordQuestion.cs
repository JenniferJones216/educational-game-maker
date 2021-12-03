using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class CrosswordQuestion
    {
        public int Id { get; set; }
        public int CrosswordId { get; set; }
        public string Clue { get; set; }
        public string Answer { get; set; }
    }
}
