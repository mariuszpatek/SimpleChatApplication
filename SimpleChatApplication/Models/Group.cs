using System.Collections.Generic;

namespace SimpleChatApplication.Models
{
    public class Group
    {
        public Group()
        {
            ConnectionsIds = new List<string>();
        }
        public string Id { get; set; }
        public List<string> ConnectionsIds { get; set; }
    }
}
