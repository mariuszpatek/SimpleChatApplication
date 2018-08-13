using Microsoft.AspNetCore.SignalR;
using SimpleChatApplication.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SimpleChatApplication.Hubs
{
    public class ChatHub : Hub
    {
        private List<Group> _groups;
        public ChatHub(List<Group> groups)
        {
            _groups = groups;
        }
        public override async Task OnConnectedAsync()
        {
            await Clients.Caller.SendAsync("OnConnected", Context.ConnectionId);
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            _groups.ForEach(g => g.ConnectionsIds.RemoveAll(i => i == Context.ConnectionId));
            return base.OnDisconnectedAsync(exception); 
        }
    }
}
