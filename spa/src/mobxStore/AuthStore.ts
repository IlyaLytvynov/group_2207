export const AUTH_INSTANCE_NAME = 'authStore';

export interface IAuthStore {
	isAuthenticated: boolean;
	signIn: (credentials: any) => void;
	signOut: () => void;
}

export class AuthStore implements IAuthStore {
	public isAuthenticated: boolean = false;
	public signIn = (credentials: any) => {
		// ... srevre call
		this.isAuthenticated = true;
	};

	public signOut = () => {
		this.isAuthenticated = false;
	}
}

export class FakeAuthStore implements IAuthStore {
	public isAuthenticated: boolean = false;
	public signIn = (credentials: any) => {
		this.isAuthenticated = true;
	};

	public signOut = () => {
		this.isAuthenticated = false;
	}
}