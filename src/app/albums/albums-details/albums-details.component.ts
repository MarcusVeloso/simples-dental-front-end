import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photograph } from '../models/photograph';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.css']
})
export class AlbumsDetailsComponent implements OnInit {

  photosList: Photograph[] = [];

  constructor(private albumService: AlbumService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.url[1].path;
    this.albumService.obterPhotosPorId(id)
      .subscribe(
        photo => {
          this.photosList = photo;
        });
  }
}