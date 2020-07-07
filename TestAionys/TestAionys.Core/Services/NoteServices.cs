using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using TestAionys.Abstraction.Interfaces;
using TestAionys.Context.Entity;
using TestAionys.Context.NoteDbContext;

namespace TestAionys.Core.Services
{
    public class NoteServices : INotes<Note>
    {
        private readonly NoteContext _context;

        public NoteServices(NoteContext context)
        {
            this._context = context;
        }
        public void AddNote(Note entity)
        {
            _context.Notes.Add(entity);
        }

        public void DeleteNote(string id)
        {
            Note finded = _context.Notes.First(x => x.id == id);
            _context.Notes.Remove(finded);
        }

        public void EditNote(Note entity)
        {
            var index = _context.Notes.FindIndex(x => x.id == entity.id);
            _context.Notes[index] = entity;
        }

        public List<Note> GetAllNotes()
        {
            return _context.Notes.ToList();
        }
    }
}
