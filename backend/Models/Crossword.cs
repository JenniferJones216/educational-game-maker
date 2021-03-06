using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class Crossword
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public virtual List<CrosswordQuestion> CrosswordQuestions { get; set; }
    }
}
