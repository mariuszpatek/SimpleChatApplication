using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SimpleChatApplication.Hubs;
using SimpleChatApplication.Models;
using System;

namespace SimpleChatApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private IHubContext<ChatHub> _hubContext;
        public MessagesController(IHubContext<ChatHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpPost]
        public async void Post([FromBody]Message message)
        {
            message.dateOfDispatch = DateTime.Now;
            await _hubContext.Clients.Group(message.GroupId).SendAsync("MessageRecive", message);
        }
    }
}