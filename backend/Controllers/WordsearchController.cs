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
    public class WordsearchController : ControllerBase
    {
        private readonly GameContext _context;

        public WordsearchController(GameContext context)
        {
            _context = context;
        }

        // GET: api/Wordserches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Wordsearch>>> Get()
        {
            return await _context.Wordsearches.ToListAsync();
        }

        // GET: api/Wordserches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Wordsearch>> GetWordserch(int id)
        {
            var wordserch = await _context.Wordsearches.FindAsync(id);

            if (wordserch == null)
            {
                return NotFound();
            }

            return wordserch;
        }

        // PUT: api/Wordserches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWordserch(int id, Wordsearch wordserch)
        {
            if (id != wordserch.Id)
            {
                return BadRequest();
            }

            _context.Entry(wordserch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WordserchExists(id))
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

        // POST: api/Wordserches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Wordsearch>> PostWordserch(Wordsearch wordserch)
        {
            _context.Wordsearches.Add(wordserch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWordserch", new { id = wordserch.Id }, wordserch);
        }

        // DELETE: api/Wordserches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWordserch(int id)
        {
            var wordserch = await _context.Wordsearches.FindAsync(id);
            if (wordserch == null)
            {
                return NotFound();
            }

            _context.Wordsearches.Remove(wordserch);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WordserchExists(int id)
        {
            return _context.Wordsearches.Any(e => e.Id == id);
        }
    }
}
