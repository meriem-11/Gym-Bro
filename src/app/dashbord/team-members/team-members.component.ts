import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareddataService } from 'src/app/shared/shareddata.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  myForm: FormGroup;
  teamMembers: any[] = [];
  editedIndex: number = -1;

  constructor(private fb: FormBuilder, private _shared: ShareddataService) {
    this.myForm = this.fb.group({
      nom: ['', Validators.required],
      role: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTeamMembers();
  }

  get nomControl() {
    return this.myForm.get('nom');
  }

  get roleControl() {
    return this.myForm.get('role');
  }

  get EmailControl() {
    return this.myForm.get('Email');
  }

  get imageControl() {
    return this.myForm.get('image');
  }

  ajouter() {
    if (this.myForm.valid) {
      const teamMember = {
        id: this.generateNewId(),
        nom: this.myForm.value.nom,
        role: this.myForm.value.role,
        Email: this.myForm.value.Email,
        image: this.myForm.value.image
      };

      if (this.editedIndex === -1) {
        this._shared.addTeamMember(teamMember).subscribe(() => {
          this.loadTeamMembers();
        });
      } else {
        this._shared.updateTeamMember(teamMember.id, teamMember).subscribe(() => {
          this.loadTeamMembers();
          this.editedIndex = -1;
        });
      }

      this.myForm.reset();
    } else {
      alert('Veuillez vérifier vos informations');
    }
  }
edit(index: number) {
    this.editedIndex = index;
    const teamMember = this.teamMembers[index];
    this.myForm.patchValue({
      nom: teamMember.nom,
      role: teamMember.role,
      Email: teamMember.Email,
      image: teamMember.image
    });
  }

  delete(index: number) {
    const teamMemberId = this.teamMembers[index].id;
    this._shared.deleteTeamMember(teamMemberId).subscribe(() => {
      this.loadTeamMembers();
    });
  }

  private loadTeamMembers() {
    this._shared.getTeamMembers().subscribe(data => {
      this.teamMembers = data;
    });
  }

  private generateNewId(): number {
    const maxId = Math.max(...this.teamMembers.map(member => member.id), 0);
    return maxId + 1;
  }
}