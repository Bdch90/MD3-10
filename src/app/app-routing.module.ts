import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blogg/blog/blog.component';
import { BlogDetailComponent } from './blogg/blog-detail/blog-detail.component';
import { BlogEditComponent } from './blogg/blog-edit/blog-edit.component';

const routes: Routes = [{
  path: 'blog',
  component: BlogComponent
}, {
  path: 'blog/:id',
  component: BlogDetailComponent
}, {
  path: 'blog/:id/edit',
  component: BlogEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
