import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/core/services/role/role.service';
import { Roles } from '../../../core/types/Role';

@Component({
	selector: 'app-new-user',
	templateUrl: './new-user.component.html',
	styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

	role_type!: string;
	user_roles: Roles[] = [];
	selected_role!: Roles;

	constructor(private _role: RoleService) {}

	ngOnInit(): void {
		this.getRoles();
	}

	getRoles() {
		this._role.getRoles().subscribe(
			(data: Roles[]) => {
				this.user_roles = data;
			}
		)
	}

	onSubmit(e : any) {
		console.log('#Test',e)
	}

	setCurrentRole(role: Roles) {
		this.selected_role = role;
		console.log(role);
	}
}
