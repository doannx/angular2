"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var album_list_component_1 = require('./album-list.component');
var comp;
var fixture;
var el;
describe('AlbumListComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [album_list_component_1.AlbumListComponent],
        });
        testing_1.TestBed.compileComponents();
        fixture = testing_1.TestBed.createComponent(album_list_component_1.AlbumListComponent);
        comp = fixture.componentInstance; // AlbumListComponent test instance
        // get title DebugElement by element name
        el = fixture.debugElement.query(platform_browser_1.By.css('h2'));
    });
    it('should display original title', function () {
        fixture.detectChanges(); // trigger data binding
        expect(el.nativeElement.textContent).toContain(comp.artists[0].name);
    });
    it('should display a different test title', function () {
        comp.artists[0].name = 'Elvis Presley';
        fixture.detectChanges(); // trigger data binding
        expect(el.nativeElement.textContent).toContain('Test Title');
    });
});
//# sourceMappingURL=album-list.component.spec.js.map