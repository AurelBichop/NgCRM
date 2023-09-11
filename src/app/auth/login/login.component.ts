import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="bg-light rounded p-3">
      <h1>Connexion à NgCRM !</h1>
      <form>
        <div>
          <label class="mb-1" for="email">Adresse email</label>
          <input
            type="email"
            placeholder="Adresse email de connexion"
            name="email"
            id="email"
            class="mb-3 form-control"
          />
          <p class="invalid-feedback">L'adresse email doit être valide</p>
        </div>
        <div>
          <label class="mb-1" for="password">Mot de passe</label>
          <input
            type="password"
            placeholder="Votre mot de passe"
            name="password"
            id="password"
            class="mb-3 form-control"
          />
          <p class="invalid-feedback">
            Le mot de passe est obligatoire, doit faire 8 caractères minimum et
            contenir au moins un chiffre
          </p>
        </div>

        <button class="btn btn-success">Connexion !</button>
      </form>
    </div>
  `,
  styles: [],
})
export class LoginComponent {}
