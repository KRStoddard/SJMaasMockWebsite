import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-i-series',
  templateUrl: './i-series.component.html',
  styleUrls: ['./i-series.component.css']
})
export class ISeriesComponent implements OnInit {

  allSeries:any = {
    'tog': [{'pic':"../../assets/TOGSeries.png",
            'title': "Throne of Glass Series",
            'summary': "Throne of Glass is a young adult high fantasy novel series, beginning with Throne of Glass, released in August 2012. The story follows the journey of Celaena Sardothien, a teenage assassin in a corrupt kingdom with a tyrannical ruler, The King of Adarlan. As the tale progresses, Celaena forms unexpected bonds and uncovers a conspiracy amidst her adventures. The series concluded with the eighth book in October 2018.",
            'order': ["order one", "order two"]},
            {'pic': "../../assets/The Assassin's Blade.jpg",
            'title': "The Assassin's Blade",
            'summary': "In these action-packed prequel novellas to Throne of Glass, Celaena embarks on five daring missions. They take her from remote islands to hostile deserts, where she fights to liberate slaves and avenge tyranny. But by acting on her own terms, will Celaena truly free herself from her master, or will she suffer an unimaginable punishment for such treachery?",
            'order': ["order one", "order two"]},
            {'pic': "../../assets/Throne Of Glass.jpg",
            'title': "Throne of Glass",
            'summary': "Meet Celaena Sardothien. Beautiful. Deadly. Destined for greatness. In a land without magic, where the king rules with an iron hand, Celaena, an assassin, is summoned to the castle. She comes not to kill the king, but to win her freedom. If she defeats twenty-three killers, thieves, and warriors in a competition, she is released from prison to serve as the king’s champion. When her competitors start dying one by one, Celaena’s fight for freedom becomes a fight for survival, and a desperate quest to root out the evil before it destroys her world.",
            'order': ["order one", "order two"]},
            {'pic': "../../assets/Crown of Midnight.jpg",
            'title': "Crown of Midnight",
            'summary':"From the throne of glass rules a king with a fist of iron and a soul as black as pitch. Bold, daring, and lethal, assassin Celaena Sardothien won the brutal contest to become his Champion. Yet Celaena is far from loyal to the crown.  As she tries to untangle the mysteries buried deep within the glass castle, her closest relationships suffer. Then, an unspeakable tragedy shatters Celaena’s world. She must decide once and for all where her loyalties lie . . . and whom she will fight for.",
            'order': ["order one", "order two"]},
            {'pic': "../../assets/Heir of Fire.jpg",
            'title': "Heir of Fire",
            'summary': "Queen or traitor? Only she can decide. Celaena Sardothien has survived deadly contests and shattering heartbreak—but at an unspeakable cost. Lost and broken, Celaena’s only thought is to avenge the savage death of her dearest friend. But she must instead travel to a new land to confront her darkest truth…a truth about her heritage that could change her life—and her future—forever. Meanwhile, brutal and monstrous forces are gathering on the horizon, intent on enslaving her world. To defeat them, Celaena must find the strength to not only fight her inner demons but to battle the evil that is about to be unleashed. If she can overcome them, she will be Adarlan’s biggest threat—and his own deadliest enemy.",
            'order': ["order one", "order two"]},
            {'pic': "../../assets/Queen of Shadows.jpg",
            'title': "Queen of Shadows",
            'summary': "Her destiny awaits. But first, vengeance… Everyone Celaena Sardothien loves has been taken from her. But she’s at last returned to the empire—for vengeance, to rescue her once-glorious kingdom, and to confront the shadows of her past. She will fight for her cousin, a warrior prepared to die for her to regain her throne. She will fight for her friend, a young man trapped in an unspeakable prison. And she will fight for her people, enslaved to a brutal king and awaiting their lost queen’s triumphant return.",
            'order': ["order one", "order two"]},
            {'pic': "../../assets/Empire of Storms.png",
            'title': "Empire of Storms",
            'summary': "The long path to the throne has only just begun for Aelin Galathynius. Loyalties have been broken and bought, friends have been lost and gained, and those who possess magic find themselves at odds with those who don’t. As the kingdoms of Erilea fracture around her, enemies must become allies if Aelin is to keep those she loves from falling to the dark forces poised to claim her world. With war looming on all horizons, the only chance for salvation lies in a desperate quest that may mark the end of everything Aelin holds dear.",
            'order': ["order 1", "order 2"]}, 
            {'pic': "../../assets/Tower of Dawn.jpg",
            'title': "Tower of Dawn",
            'summary': "Chaol Westfall has always defined himself by his unwavering loyalty, his strength, and his position as the Captain of the Guard. But all of that has changed since the glass castle shattered, since his men were slaughtered, since the King of Adarlan spared him from a killing blow, but left his body broken. His only shot at recovery lies with the legendary healers of the Torre Cesme in Antica–the stronghold of the southern continent’s mighty empire. And with war looming over Dorian and Aelin back home, their survival might lie with Chaol and Nesryn convincing its rulers to ally with them.",
            'order': ["order one", "order two"]},
            {'pic': "../../assets/Kingdom of Ash.jpg",
            'title': "Kingdom of Ash",
            'summary': "Aelin Galathynius’s journey from slave to king’s assassin to the queen of a once-great kingdom reaches its heart-rending finale as war erupts across her world. As the threads of fate weave together at last, all must fight, if they are to have a chance at a future. Some bonds will grow even deeper, while others will be severed forever in the explosive final chapter of the Throne of Glass series.",
            'order': ["order one", "order two"]}
    ]}
  iSeries:string = " ";

  seriesInfo:any;

  constructor(private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.iSeries = params.abbr
    )

    this.seriesInfo = this.allSeries[this.iSeries]
  }

}
