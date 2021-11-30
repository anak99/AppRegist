import { TestBed } from '@angular/core/testing';

import { DetailAsignaturaService } from './detail-asignatura.service';

describe('DetailAsignaturaService', () => {
  let service: DetailAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
