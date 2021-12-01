using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EducationalGameMaker;
using EducationalGameMaker.Models;

namespace EducationalGameMaker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrosswordsController : ControllerBase
    {
        private readonly GameContext _context;

        public CrosswordsController(GameContext context)
        {
            _context = context;
        }

        // GET: api/Crosswords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Crossword>>> GetCrosswords()
        {
            return await _context.Crosswords.ToListAsync();
        }

        // GET: api/Crosswords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Crossword>> GetCrossword(int id)
        {
            var crossword = await _context.Crosswords.FindAsync(id);

            if (crossword == null)
            {
                return NotFound();
            }

            return crossword;
        }

        // PUT: api/Crosswords/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrossword(int id, Crossword crossword)
        {
            if (id != crossword.Id)
            {
                return BadRequest();
            }

            _context.Entry(crossword).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CrosswordExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Crosswords
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Crossword>> PostCrossword(Crossword crossword)
        {
            _context.Crosswords.Add(crossword);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCrossword", new { id = crossword.Id }, crossword);
        }

        // DELETE: api/Crosswords/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCrossword(int id)
        {
            var crossword = await _context.Crosswords.FindAsync(id);
            if (crossword == null)
            {
                return NotFound();
            }

            _context.Crosswords.Remove(crossword);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CrosswordExists(int id)
        {
            return _context.Crosswords.Any(e => e.Id == id);
        }
    }
}
