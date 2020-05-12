import { Component } from "@angular/core";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { Platform } from "@ionic/angular";
import { File } from "@ionic-native/file/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  step = 0;
  shake=false;
  constructor(
    private nativeAudio: NativeAudio,
    private platform: Platform,
    private file: File
  ) {}

  ionViewWillEnter() {
    this.platform.ready().then((_) => {
      console.log("plat ready");

      console.log();
      this.nativeAudio
        .preloadSimple(
          "q1",
          "assets/KefBethes.mp3"
        )
        .then(
          (s) => {
            console.log(s);
          },
          (err) => {
            console.log(err);
          }
        );
      this.nativeAudio.preloadSimple("q2", "assets/Goh.mp3").then(
        (s) => {
          console.log(s);
        },
        (err) => {
          console.log(err);
        }
      );
      this.nativeAudio.preloadSimple("q3", "assets/Erhag.mp3").then(
        (s) => {
          console.log(s);
        },
        (err) => {
          console.log(err);
        }
      );
      this.nativeAudio.preloadSimple("q4", "assets/Moot.mp3").then(
        (s) => {
          console.log(s);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
  begin() {
    this.step++;
  }

  next() {
    if (this.step < 5) {
      this.step++;
    }
  }

  reset(){
    this.step = 0;
  }

  play(q) {
    console.log(q);
    
    this.platform.ready().then((_) => {
      this.nativeAudio.play(q);
      if(q=="q4"){
        this.shake=true;
      }else{
        this.shake=false;
      }
    });
  }
}
