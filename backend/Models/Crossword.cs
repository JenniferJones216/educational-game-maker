using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class Crossword
    {
        public int Id { get; set; }
        
        public int UserId { get; set; }
        public virtual List<CrosswordTask> CrosswordTasks { get; set; }
        public virtual User User { get; set; }

    }
}
