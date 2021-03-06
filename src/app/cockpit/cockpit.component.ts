import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  // newServerName = ''; ## Uesd
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameInput:HTMLInputElement) {
    console.log(serverNameInput)
    this.serverCreated.emit({
      serverName:serverNameInput.value, //Local refrance template
      serverContent:this.newServerContent})
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    });
  }
}
