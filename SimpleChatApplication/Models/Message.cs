using System;

namespace SimpleChatApplication.Models
{
    public class Message
    {
        public string User { get; set; }
        public string Body { get; set; }
        public string ConnectionId { get; set; }
        public bool IsMyMessage { get; set; }
        public DateTime dateOfDispatch { get; set; }
        public string GroupId { get; set; }
    }
}
