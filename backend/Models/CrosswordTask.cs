
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker.Models
{
    public class CrosswordTask
    {
        public int Id { get; set; }
        public int CrosswordId { get; set; }
        public int Task1Id { get; set; }

        public virtual Crossword Crossword { get; set; }
        public virtual Task1 Task1 { get; set; }

    }
}
