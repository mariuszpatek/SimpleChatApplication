using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SimpleChatApplication.Hubs;
using SimpleChatApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleChatApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        private List<Group> _groups;
        private IHubContext<ChatHub> _hubContext;
        public GroupsController(IHubContext<ChatHub> hubContext, List<Group> groups)
        {
            _hubContext = hubContext;
            _groups = groups;
        }

        [HttpPost]
        [Route("CreateNewGroup")]
        public async Task<IActionResult> CreateNewGroup([FromBody]string connectionId)
        {
            if (connectionId == null)
                return BadRequest();

            var groupId = Guid.NewGuid().ToString();
            await _hubContext.Groups.AddToGroupAsync(connectionId, groupId);
            var groupToAdd = new Group() { Id = groupId };
            groupToAdd.ConnectionsIds.Add(connectionId);
            _groups.Add(groupToAdd);

            return Ok(groupToAdd);
        }

        [HttpPost]
        [Route("JoinToExistingGroup")]
        public async Task<IActionResult> JoinToExistingGroup([FromBody] GroupDto groupDto)
        {
            var result = _groups.Where(g => g.Id == groupDto.Id).SingleOrDefault();

            if (result == null)
                return BadRequest("Group doesn't exist");
            if(result.ConnectionsIds.Any(c => c == groupDto.ConnectionId))
                return BadRequest("You alrady belongs to this group");

            await _hubContext.Groups.AddToGroupAsync(groupDto.ConnectionId, groupDto.Id);
            result.ConnectionsIds.Add(groupDto.ConnectionId);          

            return Ok();
        }
    }
}