import {Component, OnInit} from '@angular/core';
import { interval } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {SwPush, SwUpdate} from '@angular/service-worker';
import * as $ from 'jquery';
import {RecipedataService} from './services/recipedata.service';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  status = 'ONLINE';
  isConnected = true;
  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private snackbar: MatSnackBar,
              private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      } else {
        this.status = "OFFLINE";
      }
    })
     this.swUpdate.available.subscribe(evt => {
      this.swUpdate.checkForUpdate().then(() => {

        const snack = this.snackbar.open('Update Available', 'Reload', {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
        snack
          .onAction()
          .subscribe(() => {
            window.location.reload();
          });

        setTimeout(() => {
          snack.dismiss();
        }, 2000);
      });
    });


  }

  ngOnInit() {
  }






}
