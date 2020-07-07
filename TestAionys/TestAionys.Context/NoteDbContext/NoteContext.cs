using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using TestAionys.Context.Entity;

namespace TestAionys.Context.NoteDbContext
{
    public class NoteContext : DbContext
    {
        public List<Note> Notes { get; set; } = new List<Note>()
        {
            new Note()
            {
                id= Guid.NewGuid().ToString(),
                Name= "Note1",
                Detail="Detail Note_1",
                Date=DateTime.Now
            },
            new Note()
            {
                id= Guid.NewGuid().ToString(),
                Name= "Note2",
                Detail="Detail Note_2",
                Date=DateTime.Now
            }
        };
    }
}
