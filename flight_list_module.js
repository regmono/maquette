// ====== MODULE FLIGHT LIST ATC ======
// flight-list-module.js

// ====== DÉFINITIONS DES COLONNES PAR TYPE DE LISTE ======
const LIST_COLUMN_DEFINITIONS = {
  'dep-startup': [
    { name: 'time', label: 'TIME', visible: true, mandatory: true, width: 60, order: 0 },
    { name: 'tobt', label: 'TOBT', visible: false, width: 60, order: 1 },
    { name: 'tsat', label: 'TSAT', visible: false, width: 60, order: 2 },
    { name: 'slot', label: 'SLOT', visible: true, mandatory: true, width: 60, order: 3 },
    { name: 'callsign', label: 'CALLSIGN', visible: true, mandatory: true, editable: true, width: 80, order: 4 },
    { name: 'no', label: 'NO', visible: false, width: 40, order: 5 },
    { name: 'actyp', label: 'ACTYP', visible: true, mandatory: true, editable: true, width: 70, order: 6 },
    { name: 'wtc', label: 'W', visible: true, width: 30, order: 7 },
    { name: 'icao', label: 'ICAO', visible: false, width: 50, order: 8 },
    { name: 'stn', label: 'STN', visible: true, mandatory: true, editable: true, width: 50, order: 9 },
    { name: 'rwy', label: 'RWY', visible: true, mandatory: true, editable: true, width: 50, order: 10 },
    { name: 'ades', label: 'ADES', visible: true, mandatory: true, width: 60, order: 11 },
    { name: 'sid', label: 'SID', visible: true, mandatory: true, editable: true, width: 80, order: 12 },
    { name: 'cfl', label: 'CFL', visible: true, mandatory: true, editable: true, width: 50, order: 13 },
    { name: 'assr', label: 'ASSR', visible: true, mandatory: true, editable: true, width: 60, order: 14 },
    { name: 'e', label: 'E', visible: true, mandatory: true, editable: true, width: 30, order: 15 },
    { name: 'fr', label: 'FR', visible: true, editable: true, width: 30, order: 16 },
    { name: 'txt', label: 'TXT', visible: false, editable: true, width: 100, order: 17 },
    { name: 'vtt', label: 'VTT', visible: false, width: 50, order: 18 },
    { name: 'ttot', label: 'TTOT', visible: false, width: 60, order: 19 },
    { name: 'sts', label: 'STS', visible: true, width: 60, order: 20 },
    { name: 'flow', label: 'FLOW', visible: true, mandatory: true, type: 'action', width: 70, order: 21 }
  ],
  'dep-taxi-out': [
    { name: 'dsq', label: 'DSQ', visible: true, width: 40, order: 0 },
    { name: 'slot', label: 'SLOT', visible: true, mandatory: true, width: 60, order: 1 },
    { name: 'callsign', label: 'CALLSIGN', visible: true, mandatory: true, width: 80, order: 2 },
    { name: 'stn', label: 'STN', visible: true, editable: true, width: 50, order: 3 },
    { name: 'rwy', label: 'RWY', visible: true, mandatory: true, editable: true, width: 50, order: 4 },
    { name: 'no', label: 'NO', visible: false, width: 40, order: 5 },
    { name: 'actyp', label: 'ACTYP', visible: true, mandatory: true, width: 70, order: 6 },
    { name: 'wtc', label: 'W', visible: true, width: 30, order: 7 },
    { name: 'icao', label: 'ICAO', visible: false, width: 50, order: 8 },
    { name: 'ades', label: 'ADES', visible: true, width: 60, order: 9 },
    { name: 'sid', label: 'SID', visible: true, mandatory: true, editable: true, width: 80, order: 10 },
    { name: 'cfl', label: 'CFL', visible: true, mandatory: true, editable: true, width: 50, order: 11 },
    { name: 'assr', label: 'ASSR', visible: true, editable: true, width: 60, order: 12 },
    { name: 'e', label: 'E', visible: false, editable: true, width: 30, order: 13 },
    { name: 'fr', label: 'FR', visible: false, editable: true, width: 30, order: 14 },
    { name: 'txt', label: 'TXT', visible: false, editable: true, width: 100, order: 15 },
    { name: 'vtt', label: 'VTT', visible: false, width: 50, order: 16 },
    { name: 'ttot', label: 'TTOT', visible: true, width: 60, order: 17 },
    { name: 'sts', label: 'STS', visible: true, width: 60, order: 18 },
    { name: 'flow', label: 'FLOW', visible: true, mandatory: true, type: 'action', width: 70, order: 19 }
  ],
  'dep-takeoff': [
    { name: 'dsq', label: 'DSQ', visible: true, width: 40, order: 0 },
    { name: 'slot', label: 'SLOT', visible: true, mandatory: true, width: 60, order: 1 },
    { name: 'rwy', label: 'RWY', visible: true, mandatory: true, editable: true, width: 50, order: 2 },
    { name: 'callsign', label: 'CALLSIGN', visible: true, mandatory: true, width: 80, order: 3 },
    { name: 'no', label: 'NO', visible: false, width: 40, order: 4 },
    { name: 'actyp', label: 'ACTYP', visible: true, mandatory: true, width: 70, order: 5 },
    { name: 'wtc', label: 'W', visible: true, width: 30, order: 6 },
    { name: 'icao', label: 'ICAO', visible: false, width: 50, order: 7 },
    { name: 'tas', label: 'TAS', visible: false, width: 50, order: 8 },
    { name: 'ades', label: 'ADES', visible: true, width: 60, order: 9 },
    { name: 'sid', label: 'SID', visible: true, mandatory: true, editable: true, width: 80, order: 10 },
    { name: 'cfl', label: 'CFL', visible: true, mandatory: true, editable: true, width: 50, order: 11 },
    { name: 'assr', label: 'ASSR', visible: true, width: 60, order: 12 },
    { name: 'e', label: 'E', visible: false, width: 30, order: 13 },
    { name: 'fr', label: 'FR', visible: false, width: 30, order: 14 },
    { name: 'txt', label: 'TXT', visible: false, editable: true, width: 100, order: 15 },
    { name: 'ttot', label: 'TTOT', visible: true, width: 60, order: 16 },
    { name: 'sts', label: 'STS', visible: true, width: 60, order: 17 },
    { name: 'flow', label: 'FLOW', visible: true, mandatory: true, type: 'action', width: 70, order: 18 }
  ],
  'arr-sector': [
    { name: 'rwy', label: 'RWY', visible: true, mandatory: true, editable: true, width: 50, order: 0 },
    { name: 'callsign', label: 'CALLSIGN', visible: true, mandatory: true, width: 80, order: 1 },
    { name: 'no', label: 'NO', visible: false, width: 40, order: 2 },
    { name: 'actyp', label: 'ACTYP', visible: true, mandatory: true, width: 70, order: 3 },
    { name: 'wtc', label: 'W', visible: true, width: 30, order: 4 },
    { name: 'icao', label: 'ICAO', visible: false, width: 50, order: 5 },
    { name: 'copn', label: 'COPN', visible: true, mandatory: true, width: 70, order: 6 },
    { name: 'etn', label: 'ETN', visible: true, mandatory: true, width: 60, order: 7 },
    { name: 'pel', label: 'PEL', visible: false, width: 50, order: 8 },
    { name: 'eta', label: 'ETA', visible: true, mandatory: true, width: 60, order: 9 },
    { name: 'stn', label: 'STN', visible: true, mandatory: true, width: 50, order: 10 },
    { name: 'adep', label: 'ADEP', visible: true, width: 60, order: 11 },
    { name: 'fr', label: 'FR', visible: true, editable: true, width: 30, order: 12 },
    { name: 'ades', label: 'ADES', visible: false, width: 60, order: 13 },
    { name: 'copx', label: 'COPX', visible: false, width: 70, order: 14 },
    { name: 'txt', label: 'TXT', visible: false, editable: true, width: 100, order: 15 },
    { name: 'ttot', label: 'TTOT', visible: false, width: 60, order: 16 },
    { name: 'sts', label: 'STS', visible: true, width: 60, order: 17 },
    { name: 'flow', label: 'FLOW', visible: true, mandatory: true, type: 'action', width: 70, order: 18 }
  ],
  'arr-sector-active': [
    { name: 'rwy', label: 'RWY', visible: true, mandatory: true, editable: true, width: 50, order: 0 },
    { name: 'callsign', label: 'CALLSIGN', visible: true, mandatory: true, width: 80, order: 1 },
    { name: 'no', label: 'NO', visible: false, width: 40, order: 2 },
    { name: 'actyp', label: 'ACTYP', visible: true, mandatory: true, width: 70, order: 3 },
    { name: 'wtc', label: 'W', visible: true, width: 30, order: 4 },
    { name: 'icao', label: 'ICAO', visible: false, width: 50, order: 5 },
    { name: 'cfl', label: 'CFL', visible: true, width: 50, order: 6 },
    { name: 'adep', label: 'ADEP', visible: true, width: 60, order: 7 },
    { name: 'ades', label: 'ADES', visible: false, width: 60, order: 8 },
    { name: 'fr', label: 'FR', visible: true, width: 30, order: 9 },
    { name: 'txt', label: 'TXT', visible: false, editable: true, width: 100, order: 10 },
    { name: 'stn', label: 'STN', visible: true, editable: true, width: 50, order: 11 },
    { name: 'copx', label: 'COPX', visible: true, mandatory: true, width: 70, order: 12 },
    { name: 'etx', label: 'ETX', visible: true, width: 60, order: 13 },
    { name: 'assr', label: 'ASSR', visible: true, editable: true, width: 60, order: 14 },
    { name: 'sts', label: 'STS', visible: true, width: 60, order: 15 },
    { name: 'flow', label: 'FLOW', visible: true, type: 'action', width: 70, order: 16 }
  ],
  'arr-taxi-in': [
    { name: 'callsign', label: 'CALLSIGN', visible: true, mandatory: true, width: 80, order: 0 },
    { name: 'stn', label: 'STN', visible: true, mandatory: true, editable: true, width: 50, order: 1 },
    { name: 'rwy', label: 'RWY', visible: true, mandatory: true, width: 50, order: 2 },
    { name: 'no', label: 'NO', visible: false, width: 40, order: 3 },
    { name: 'actyp', label: 'ACTYP', visible: true, mandatory: true, editable: true, width: 70, order: 4 },
    { name: 'wtc', label: 'W', visible: true, width: 30, order: 5 },
    { name: 'icao', label: 'ICAO', visible: false, width: 50, order: 6 },
    { name: 'adep', label: 'ADEP', visible: true, width: 60, order: 7 },
    { name: 'txt', label: 'TXT', visible: false, editable: true, width: 100, order: 8 },
    { name: 'sts', label: 'STS', visible: true, width: 60, order: 9 },
    { name: 'flow', label: 'FLOW', visible: true, type: 'action', width: 70, order: 10 }
  ]
};

// ====== DONNÉES D'EXEMPLE ======
const SAMPLE_FLIGHT_DATA = {
  'dep-startup': [
    { time: '0700', tobt: '0700', tsat: '0658', slot: '0705', callsign: 'BAW16H', no: '1', actyp: 'A320', wtc: 'M', icao: 'M', stn: 'A12', rwy: '35R', ades: 'EGLL', sid: 'GILEP2L', cfl: '060', assr: '4233', e: 'Y', fr: 'I', txt: '', vtt: '12', ttot: '0712', sts: 'RDY', flow: 'SUP', phase: 'startup' },
    { time: '0710', tobt: '0710', tsat: '0708', slot: '0715', callsign: 'JSH652', no: '1', actyp: 'C650', wtc: 'M', icao: 'M', stn: 'B04', rwy: '35R', ades: 'LTAI', sid: 'ERLOS4J', cfl: '080', assr: '2230', e: 'N', fr: 'I', txt: '', vtt: '8', ttot: '0723', sts: 'PEND', flow: 'SUP', phase: 'startup' },
    { time: '0730', tobt: '0730', tsat: '0728', slot: '0735', callsign: 'RYR69QQ', no: '1', actyp: 'B738', wtc: 'M', icao: 'M', stn: 'C21', rwy: '35R', ades: 'EDDB', sid: 'BADOV2B', cfl: '070', assr: '1000', e: 'Y', fr: 'I', txt: 'SLOT', vtt: '15', ttot: '0750', sts: 'SLOT', flow: 'SUP', phase: 'startup' },
    { time: '0735', tobt: '0735', tsat: '0732', slot: '0740', callsign: 'AFR456', no: '1', actyp: 'A321', wtc: 'M', icao: 'M', stn: 'A08', rwy: '35R', ades: 'LFPG', sid: 'GILEP2L', cfl: '090', assr: '5432', e: 'Y', fr: 'I', txt: '', vtt: '10', ttot: '0750', sts: 'RDY', flow: 'SUP', phase: 'startup' },
    { time: '0745', tobt: '0745', tsat: '0743', slot: '0750', callsign: 'DLH123', no: '1', actyp: 'A350', wtc: 'H', icao: 'H', stn: 'G2', rwy: '35R', ades: 'EDDM', sid: 'BADOV2B', cfl: '100', assr: '7654', e: 'Y', fr: 'I', txt: '', vtt: '12', ttot: '0762', sts: 'RDY', flow: 'SUP', phase: 'startup' }
  ],
  'dep-taxi-out': [
    { dsq: '1', slot: '0745', callsign: 'AFR123', stn: 'A15', rwy: '35R', no: '1', actyp: 'A321', wtc: 'M', icao: 'M', ades: 'LFPG', sid: 'GILEP2L', cfl: '080', assr: '5510', e: 'Y', fr: 'I', txt: '', vtt: '18', ttot: '0803', sts: 'TAXI', flow: 'PUSH', phase: 'taxi-out' },
    { dsq: '2', slot: '0750', callsign: 'SWR789', stn: 'B12', rwy: '35R', no: '1', actyp: 'A320', wtc: 'M', icao: 'M', ades: 'LSZH', sid: 'ERLOS4J', cfl: '070', assr: '6789', e: 'Y', fr: 'I', txt: '', vtt: '15', ttot: '0808', sts: 'TAXI', flow: 'TAXI', phase: 'taxi-out' }
  ],
  'dep-takeoff': [
    { dsq: '1', slot: '0805', rwy: '35R', callsign: 'DLH45A', no: '1', actyp: 'A359', wtc: 'H', icao: 'H', tas: '180', ades: 'EDDM', sid: 'BADOV2B', cfl: '090', assr: '7201', e: 'Y', fr: 'I', txt: '', ttot: '0805', sts: 'LUP', flow: 'T/O', phase: 'takeoff' }
  ],
  'arr-sector': [
    { rwy: '35L', callsign: 'SWR88K', no: '1', actyp: 'A320', wtc: 'M', icao: 'M', copn: 'MOLUS', etn: '0815', pel: '100', eta: '0825', stn: 'G1', adep: 'LSZH', fr: 'I', ades: 'LFLL', copx: '', txt: '', ttot: '', sts: 'ARR', flow: 'SEQ', phase: 'sector' },
    { rwy: '35L', callsign: 'KLM456', no: '1', actyp: 'B737', wtc: 'M', icao: 'M', copn: 'LUMEL', etn: '0820', pel: '090', eta: '0830', stn: 'F2', adep: 'EHAM', fr: 'I', ades: 'LFLL', copx: '', txt: '', ttot: '', sts: 'ARR', flow: 'SEQ', phase: 'sector' }
  ],
  'arr-sector-active': [
    { rwy: '35L', callsign: 'KLM92F', no: '1', actyp: 'B737', wtc: 'M', icao: 'M', cfl: '040', adep: 'EHAM', ades: 'LFLL', fr: 'I', txt: '', stn: 'F3', copx: 'MOLUS', etx: '0835', assr: '1234', sts: 'APP', flow: 'APP', phase: 'sector' }
  ],
  'arr-taxi-in': [
    { callsign: 'BAW30B', stn: 'F3', rwy: '35L', no: '1', actyp: 'B789', wtc: 'H', icao: 'H', adep: 'EGLL', txt: '', sts: 'LANDED', flow: 'TAXI', phase: 'taxi-in' },
    { callsign: 'EZY789', stn: 'C15', rwy: '35L', no: '1', actyp: 'A320', wtc: 'M', icao: 'M', adep: 'EGKK', txt: '', sts: 'TAXI', flow: 'PARK', phase: 'taxi-in' }
  ]
};

// ====== GESTIONNAIRE PRINCIPAL ======
class FlightListManager {
  constructor() {
    this.flightData = { ...SAMPLE_FLIGHT_DATA };
    this.listInstances = {};
    this.visibilityState = {
      'dep-startup': true,
      'dep-taxi-out': true,
      'dep-takeoff': true,
      'arr-sector': true,
      'arr-sector-active': true,
      'arr-taxi-in': true
    };
    
    // Charger la configuration des colonnes depuis localStorage
    this.columnConfigs = this.loadColumnConfigs();
    
    // Variables pour la popup de configuration
    this.currentConfigListType = null;
    this.tempColumnConfig = [];
    this.draggedItem = null;
    this.dropTargetItem = null;
  }

  loadColumnConfigs() {
    const saved = localStorage.getItem('flightListColumnConfigs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.warn('Erreur lors du chargement de la configuration des colonnes:', e);
      }
    }
    
    // Configuration par défaut
    const defaultConfig = {};
    Object.keys(LIST_COLUMN_DEFINITIONS).forEach(listType => {
      defaultConfig[listType] = [...LIST_COLUMN_DEFINITIONS[listType]];
    });
    return defaultConfig;
  }

  saveColumnConfigs() {
    localStorage.setItem('flightListColumnConfigs', JSON.stringify(this.columnConfigs));
  }

  // ====== GESTION DE LA POPUP DE CONFIGURATION DES COLONNES ======
  openColumnConfig(listType) {
    this.currentConfigListType = listType;
    
    // Copier la configuration actuelle (FIX: vérifier que c'est un tableau)
    const currentConfig = this.columnConfigs[listType];
    if (Array.isArray(currentConfig)) {
      this.tempColumnConfig = JSON.parse(JSON.stringify(currentConfig));
    } else {
      // Fallback: utiliser la définition par défaut
      this.tempColumnConfig = JSON.parse(JSON.stringify(LIST_COLUMN_DEFINITIONS[listType]));
    }
    
    const titles = {
      'dep-startup': 'Departures - Startup',
      'dep-taxi-out': 'Departures - Taxi Out',
      'dep-takeoff': 'Departures - Take-off',
      'arr-sector': 'Arrivals - Sector Inbound',
      'arr-sector-active': 'Arrivals - Sector Active',
      'arr-taxi-in': 'Arrivals - Taxi In'
    };
    
    document.getElementById('popupTitle').textContent = `Configuration - ${titles[listType]}`;
    this.renderColumnConfigPopup();
    this.showColumnConfigPopup();
  }

  renderColumnConfigPopup() {
    const container = document.getElementById('popupColumnList');
    container.innerHTML = '';

    // Trier les colonnes par ordre
    const sortedColumns = [...this.tempColumnConfig].sort((a, b) => (a.order || 0) - (b.order || 0));
    
    sortedColumns.forEach((col, index) => {
      const div = document.createElement('div');
      div.className = `popup-column-item ${col.mandatory ? 'mandatory' : ''}`;
      div.draggable = true;
      div.dataset.columnName = col.name;
      div.dataset.originalIndex = index;
      
      div.innerHTML = `
        <span class="column-drag-handle">⋮⋮</span>
        <input type="checkbox" ${col.visible ? 'checked' : ''}>
        <span>${col.label} ${col.mandatory ? '*' : ''}</span>
      `;

      // Event listeners pour le drag & drop
      div.addEventListener('dragstart', (e) => this.onColumnDragStart(e, div));
      div.addEventListener('dragover', (e) => this.onColumnDragOver(e));
      div.addEventListener('drop', (e) => this.onColumnDrop(e, div));
      div.addEventListener('dragend', (e) => this.onColumnDragEnd(e));
      div.addEventListener('dragenter', (e) => this.onColumnDragEnter(e, div));
      div.addEventListener('dragleave', (e) => this.onColumnDragLeave(e, div));

      // Event listener pour la checkbox
      const checkbox = div.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => {
        const column = this.tempColumnConfig.find(c => c.name === col.name);
        if (column) {
          column.visible = checkbox.checked;
        }
      });

      container.appendChild(div);
    });
  }

  onColumnDragStart(e, element) {
    this.draggedItem = element;
    element.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', element.outerHTML);
  }

  onColumnDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  onColumnDragEnter(e, element) {
    if (this.draggedItem && this.draggedItem !== element) {
      element.classList.add('drop-target');
      this.dropTargetItem = element;
    }
  }

  onColumnDragLeave(e, element) {
    if (!element.contains(e.relatedTarget)) {
      element.classList.remove('drop-target');
      if (this.dropTargetItem === element) {
        this.dropTargetItem = null;
      }
    }
  }

  onColumnDrop(e, targetElement) {
    e.preventDefault();
    
    if (this.draggedItem && this.draggedItem !== targetElement) {
      const draggedColumnName = this.draggedItem.dataset.columnName;
      const targetColumnName = targetElement.dataset.columnName;
      
      const draggedIndex = this.tempColumnConfig.findIndex(c => c.name === draggedColumnName);
      const targetIndex = this.tempColumnConfig.findIndex(c => c.name === targetColumnName);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        const draggedColumn = this.tempColumnConfig[draggedIndex];
        this.tempColumnConfig.splice(draggedIndex, 1);
        this.tempColumnConfig.splice(targetIndex, 0, draggedColumn);
        
        this.tempColumnConfig.forEach((col, index) => {
          col.order = index;
        });
        
        this.renderColumnConfigPopup();
      }
    }
  }

  onColumnDragEnd(e) {
    if (this.draggedItem) {
      this.draggedItem.classList.remove('dragging');
      this.draggedItem = null;
    }
    
    if (this.dropTargetItem) {
      this.dropTargetItem.classList.remove('drop-target');
      this.dropTargetItem = null;
    }
    
    document.querySelectorAll('.popup-column-item').forEach(item => {
      item.classList.remove('drop-target');
    });
  }

  resetColumnOrder() {
    if (confirm('Réinitialiser l\'ordre des colonnes à la configuration par défaut ?')) {
      this.tempColumnConfig = JSON.parse(JSON.stringify(LIST_COLUMN_DEFINITIONS[this.currentConfigListType]));
      this.renderColumnConfigPopup();
    }
  }

  showColumnConfigPopup() {
    const popup = document.getElementById('columnConfigPopup');
    popup.style.display = 'block';
    
    const rect = popup.getBoundingClientRect();
    popup.style.left = `${(window.innerWidth - rect.width) / 2}px`;
    popup.style.top = `${(window.innerHeight - rect.height) / 2}px`;
  }

  closeColumnConfigPopup() {
    document.getElementById('columnConfigPopup').style.display = 'none';
    this.currentConfigListType = null;
    this.tempColumnConfig = [];
  }

  applyColumnConfig() {
    if (this.currentConfigListType) {
      this.columnConfigs[this.currentConfigListType] = [...this.tempColumnConfig];
      this.saveColumnConfigs();
      
      if (this.listInstances[this.currentConfigListType]) {
        this.listInstances[this.currentConfigListType].updateColumnConfig(this.tempColumnConfig);
      }
    }
    
    this.closeColumnConfigPopup();
  }
}

// ====== CLASSE LISTE INDIVIDUELLE ======
class FlightList {
  constructor(listType, data, columnConfig) {
    this.listType = listType;
    this.data = data;
    this.columns = columnConfig && columnConfig.length > 0 
      ? [...columnConfig] 
      : [...LIST_COLUMN_DEFINITIONS[listType]];
    this.sortState = { column: this.getDefaultSortColumn(), direction: 'asc' };
    this.selectedRowId = null;

    this.render();
  }

  getDefaultSortColumn() {
    const defaultSorts = {
      'dep-startup': 'time',
      'dep-taxi-out': 'ttot',
      'dep-takeoff': 'slot',
      'arr-sector': 'etn',
      'arr-sector-active': 'etx',
      'arr-taxi-in': 'callsign'
    };
    return defaultSorts[this.listType] || 'callsign';
  }

  updateColumnConfig(newColumnConfig) {
    this.columns = [...newColumnConfig];
    this.render();
  }

  updateData(newData) {
    this.data = newData;
    this.render();
  }

  getVisibleColumns() {
    return this.columns
      .filter(c => c.visible)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  render() {
    this.renderHeader();
    this.renderBody();
    this.updateFlightCount();
  }

  renderHeader() {
    const headerElement = document.getElementById(`header-${this.listType}`);
    if (!headerElement) return;

    headerElement.innerHTML = '';
    this.getVisibleColumns().forEach(col => {
      const th = document.createElement('th');
      th.textContent = col.label;
      th.style.width = (col.width || 80) + 'px';
      
      if (col.mandatory) {
        th.classList.add('mandatory');
      }
      
      const sortIndicator = document.createElement('span');
      sortIndicator.className = 'sort-indicator';
      if (this.sortState.column === col.name) {
        sortIndicator.textContent = this.sortState.direction === 'asc' ? '↑' : '↓';
        sortIndicator.classList.add('active');
      }
      th.appendChild(sortIndicator);

      th.addEventListener('click', () => this.sortData(col.name));
      headerElement.appendChild(th);
    });
  }

  renderBody() {
    const bodyElement = document.getElementById(`body-${this.listType}`);
    if (!bodyElement) return;

    bodyElement.innerHTML = '';

    if (this.data.length === 0) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = this.getVisibleColumns().length;
      td.className = 'empty-list';
      td.textContent = 'Aucun vol';
      tr.appendChild(td);
      bodyElement.appendChild(tr);
      return;
    }

    this.data.forEach((flight, index) => {
      const tr = document.createElement('tr');
      tr.dataset.id = index;
      if (index === this.selectedRowId) {
        tr.classList.add('selected');
      }
      tr.addEventListener('click', () => this.selectRow(index));

      this.getVisibleColumns().forEach(col => {
        const td = document.createElement('td');
        td.style.width = (col.width || 80) + 'px';
        
        if (col.type === 'action') {
          const btn = document.createElement('button');
          btn.className = 'action-btn';
          btn.textContent = flight[col.name] || col.label;
          
          if (['SUP', 'T/O', 'APP'].includes(flight[col.name])) {
            btn.classList.add('ready');
          } else if (['SLOT', 'PEND'].includes(flight[col.name])) {
            btn.classList.add('warning');
          }
          
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleAction(flight, col.name);
          });
          td.appendChild(btn);
        } else {
          td.textContent = flight[col.name] || '-';
          
          if (col.name === 'callsign') {
            td.classList.add('callsign-cell');
            if (flight.phase) {
              td.classList.add(`callsign-${flight.phase}`);
            }
          }
          
          if (col.editable) {
            td.classList.add('editable-cell');
            td.addEventListener('dblclick', () => this.editField(flight, col.name, td));
          }
        }
        
        tr.appendChild(td);
      });
      bodyElement.appendChild(tr);
    });
  }

  updateFlightCount() {
    const countElement = document.getElementById(`count-${this.listType}`);
    if (countElement) {
      countElement.textContent = this.data.length;
    }
  }

  sortData(columnName) {
    if (this.sortState.column === columnName) {
      this.sortState.direction = this.sortState.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortState.column = columnName;
      this.sortState.direction = 'asc';
    }

    this.data.sort((a, b) => {
      const valA = a[columnName] || '';
      const valB = b[columnName] || '';
      const direction = this.sortState.direction === 'asc' ? 1 : -1;
      return valA.localeCompare(valB, undefined, { numeric: true }) * direction;
    });
    this.render();
  }

  selectRow(id) {
    this.selectedRowId = id;
    this.renderBody();
  }

  handleAction(flight, actionType) {
    // Fonction à customiser selon les besoins ATC
    console.log(`Action "${flight[actionType]}" pour vol ${flight.callsign} - Liste: ${this.listType}`);
    
    // Ici vous pouvez ajouter la logique métier ATC
    // Exemple: déclencher des workflows, mise à jour des statuts, etc.
  }

  editField(flight, fieldName, tdElement) {
    const currentValue = flight[fieldName] || '';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentValue;
    input.style.width = '100%';
    input.style.background = 'var(--bg-dark-3)';
    input.style.border = '1px solid var(--accent-blue)';
    input.style.color = 'var(--text-light)';
    input.style.padding = '2px';
    
    input.addEventListener('blur', () => this.saveEdit(flight, fieldName, input.value, tdElement));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.saveEdit(flight, fieldName, input.value, tdElement);
      } else if (e.key === 'Escape') {
        tdElement.textContent = currentValue;
      }
    });
    
    tdElement.innerHTML = '';
    tdElement.appendChild(input);
    input.focus();
    input.select();
  }

  saveEdit(flight, fieldName, newValue, tdElement) {
    flight[fieldName] = newValue;
    tdElement.textContent = newValue || '-';
    
    // Ici vous pouvez ajouter la logique de sauvegarde/synchronisation
    console.log(`Updated ${flight.callsign} ${fieldName}: ${newValue}`);
  }
}

// ====== EXPORT POUR UTILISATION MODULAIRE ======
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FlightListManager, FlightList, LIST_COLUMN_DEFINITIONS, SAMPLE_FLIGHT_DATA };
}

// ====== VARIABLES GLOBALES POUR INTÉGRATION ======
window.FlightListManager = FlightListManager;
window.FlightList = FlightList;
window.LIST_COLUMN_DEFINITIONS = LIST_COLUMN_DEFINITIONS;
window.SAMPLE_FLIGHT_DATA = SAMPLE_FLIGHT_DATA;
  