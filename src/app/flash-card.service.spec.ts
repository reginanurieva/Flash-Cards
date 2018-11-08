// <h2>Filters</h2>
//   <h4>Family</h4>
//
//   <select [(ngModel)]="family" (change)="filterExact('family', family)">
//     <option value="bird">Bird</option>
//     <option value="mammal">Mammal</option>
//     <option value="fish">Fish</option>
//   </select>
//
//   <button *ngIf="family"
//           (click)="removeFilter('family')">
//
//           Remove filter
//   </button>
//
//   <div *ngFor="let animal of filteredAnimals">
//     <h6>{{animal.name}}</h6>
//     <img [src]="animal.image">
//     <ul>
//       <li>Family: {{animal.family}}</li>
//       <li>Weight: {{animal.weight}} pounds</li>
//       <li>Endangered: {{animal.endangered}}</li>
//     </ul>
//   </div>
