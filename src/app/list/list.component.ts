import { Component, OnInit } from '@angular/core';

import { ListModalComponent } from './modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteRoom(link) {
    // $('#modal_delete_button').attr('onclick', 'location.href="' + link + '"');
    // $('#room_delete_modal').modal('show');
  }
}
