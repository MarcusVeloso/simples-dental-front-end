import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { Photograph } from '../models/photograph';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albumList: Album[] = [];
  photosList: Photograph[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {

    this.albumService.obterPhotos()
      .subscribe(
        photo => {
          this.photosList = photo;

          this.albumService.obterTodosAlbums()
            .subscribe(album => {
              this.albumList = album;

              this.albumList.forEach((album, index) => {
                let folder = this.photosList.find(function (photograph) {
                  return photograph.albumId == album.id;
                });
                this.albumList[index].folder = folder.thumbnailUrl;
              });
            })
        })
  }
}