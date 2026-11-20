const FOLDERS_TAB1 = [
  { id: "t1_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "t1_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "t1_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "t1_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "t1_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "t1_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "t1_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y CABLE DE BAJADA. POZOS TIERRA LIMPIEZA Y MEDICIONES" },
  { id: "t1_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "t1_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO" },
  { id: "t1_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO" },
  { id: "t1_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "t1_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "t1_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES. EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES. TECHOS. SOPORTES" },
  { id: "t1_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "t1_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) - ALTA RESOLUCION", highRes: true },
  { id: "t1_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "t1_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES" },
  { id: "t1_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "t1_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "t1_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "t1_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "t1_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO." },
  { id: "t1_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "t1_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
  { id: "t1_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE." },
  { id: "t1_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA." },
  { id: "t1_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
  { id: "t1_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS. SEÑALIZACION, Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO" },
  { id: "t1_29", name: "29. Fotos de cambio de batería", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO" }
];

const FOLDERS_TAB2 = [
  { id: "t2_01", name: "2. FORMATOS MP", desc: "SUBIR FOTOS Y ARCHIVOS PDF DE FORMATOS DE MANTENIMIENTO PREVENTIVO", allowPdf: true }
];

const FOLDERS_TAB3 = [
  { id: "t3_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO PINZA, DESARMADORES, BRUJULA, ETC" },
  { id: "t3_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR" },
  { id: "t3_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "t3_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "t3_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "t3_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
  { id: "t3_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "t3_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
  { id: "t3_09", name: "9. Validación de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES" },
  { id: "t3_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES DE LA TORRE" },
  { id: "t3_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "t3_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
  { id: "t3_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
  { id: "t3_14", name: "14. Medición de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT,ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR" },
  { id: "t3_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
  { id: "t3_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO LARGO Y ALTURA)" },
  { id: "t3_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "t3_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)" },
  { id: "t3_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "t3_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO" },
  { id: "t3_21", name: "21. Aplicación de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS" },
  { id: "t3_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS" },
  { id: "t3_23", name: "23. Vistas de las cordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
  { id: "t3_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
  { id: "t3_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
  { id: "t3_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA" },
  { id: "t3_27", name: "27. Altura soporte ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE" },
  { id: "t3_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "t3_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES" },
  { id: "t3_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO. REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO CON CRISTIAN SALAZAR." }
];

let db;
let currentProject = null;
let currentTab = 1;
let activeFolder = null;
let liveStream = null;
let sessionPhotosCount = 0;
let cachedGps = { lat: null, lon: null, place: "" };
let viewerFiles = [];
let viewerIndex = 0;
let lastVolumeShot = 0;

// Inicializar IndexedDB
const req = indexedDB.open("ReportesSiteDB_v15", 1);
req.onupgradeneeded = e => {
  const d = e.target.result;
  if (!d.objectStoreNames.contains("projects")) d.createObjectStore("projects", { keyPath: "id" });
  if (!d.objectStoreNames.contains("files")) {
    const fs = d.createObjectStore("files", { keyPath: "id" });
    fs.createIndex("projectId", "projectId", { unique: false });
  }
};
req.onsuccess = e => {
  db = e.target.result;
  renderProjects();
  startGpsWatcher();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

function showToast(msg, ms = 2600) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, ms);
}

// GPS en segundo plano sin bloquear la cámara
function startGpsWatcher() {
  if (!("geolocation" in navigator)) return;
  navigator.geolocation.watchPosition(
    pos => {
      cachedGps.lat = pos.coords.latitude.toFixed(6);
      cachedGps.lon = pos.coords.longitude.toFixed(6);
      if (!cachedGps.place) {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${cachedGps.lat}&lon=${cachedGps.lon}&zoom=16`)
          .then(r => r.json())
          .then(data => {
            if (data && data.address) {
              const a = data.address;
              const parts = [a.suburb || a.neighbourhood || a.village || a.town, a.city || a.county || a.state].filter(Boolean);
              cachedGps.place = parts.join(", ");
            }
          }).catch(() => {});
      }
    },
    () => {},
    { enableHighAccuracy: true, maximumAge: 15000, timeout: 8000 }
  );
}

// CRUD Proyectos
function createProject() {
  const inp = document.getElementById("newProjectName");
  const name = inp.value.trim();
  if (!name) return showToast("Escribe un nombre para la carpeta");
  const proj = { id: "proj_" + Date.now(), name, createdAt: Date.now() };
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").add(proj);
  tx.oncomplete = () => {
    inp.value = "";
    renderProjects();
    openProject(proj.id);
  };
}

function renderProjects() {
  const tx = db.transaction("projects", "readonly");
  tx.objectStore("projects").getAll().onsuccess = e => {
    const list = e.target.result.sort((a, b) => b.createdAt - a.createdAt);
    const el = document.getElementById("projectList");
    if (!list.length) {
      el.innerHTML = `<div class="card" style="text-align:center; color:#64748b; font-size:14px;">No hay carpetas creadas. Crea una arriba para comenzar.</div>`;
      return;
    }
    el.innerHTML = list.map(p => `
      <div class="project-item">
        <div style="flex:1; cursor:pointer;" onclick="openProject('${p.id}')">
          <div class="project-title">📁 ${escapeHtml(p.name)}</div>
          <div class="project-sub">Toca para abrir las carpetas del reporte</div>
        </div>
        <button class="btn-red btn-sm" onclick="deleteProject('${p.id}', '${escapeHtml(p.name)}')">🗑</button>
      </div>
    `).join("");
  };
}

function deleteProject(id, name) {
  if (!confirm(`¿Eliminar la carpeta "${name}" y todos sus archivos?`)) return;
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  const idx = tx.objectStore("files").index("projectId");
  idx.getAllKeys(id).onsuccess = e => {
    e.target.result.forEach(k => tx.objectStore("files").delete(k));
  };
  tx.oncomplete = () => { renderProjects(); showToast("Carpeta eliminada"); };
}

function openProject(id) {
  const tx = db.transaction("projects", "readonly");
  tx.objectStore("projects").get(id).onsuccess = e => {
    currentProject = e.target.result;
    document.getElementById("homeView").style.display = "none";
    document.getElementById("projectView").style.display = "block";
    document.getElementById("currentProjectTitle").textContent = "📁 " + currentProject.name;
    document.getElementById("shareReadyBox").style.display = "none";
    switchTab(1);
  };
}

function goHome() {
  currentProject = null;
  document.getElementById("projectView").style.display = "none";
  document.getElementById("homeView").style.display = "block";
  renderProjects();
}

function renameCurrentProject() {
  if (!currentProject) return;
  const nuevo = prompt("Nuevo nombre de la carpeta principal:", currentProject.name);
  if (!nuevo || !nuevo.trim()) return;
  currentProject.name = nuevo.trim();
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").put(currentProject);
  tx.oncomplete = () => {
    document.getElementById("currentProjectTitle").textContent = "📁 " + currentProject.name;
    showToast("Nombre actualizado");
  };
}

function switchTab(tabNum) {
  currentTab = tabNum;
  [1, 2, 3].forEach(n => {
    document.getElementById("tab" + n).classList.toggle("active", n === tabNum);
  });
  renderFolders();
}

function getFoldersForTab(tabNum) {
  if (tabNum === 1) return FOLDERS_TAB1;
  if (tabNum === 2) return FOLDERS_TAB2;
  return FOLDERS_TAB3;
}

function renderFolders() {
  if (!currentProject) return;
  const folders = getFoldersForTab(currentTab);
  const tx = db.transaction("files", "readonly");
  const idx = tx.objectStore("files").index("projectId");
  idx.getAll(currentProject.id).onsuccess = e => {
    const allFiles = e.target.result;
    const container = document.getElementById("foldersContainer");
    container.innerHTML = folders.map(f => {
      const fFiles = allFiles.filter(x => x.folderId === f.id);
      const badge = fFiles.length
        ? `<span class="badge badge-full">${fFiles.length} archivo(s)</span>`
        : `<span class="badge badge-empty">Vacía → NO APLICA</span>`;

      const thumbsHtml = fFiles.length ? `<div class="thumbs">` + fFiles.map((file, i) => {
        const url = URL.createObjectURL(file.blob);
        let media = "";
        if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
          media = `<div class="thumb-pdf" onclick="openViewer('${f.id}', ${i})">📄 PDF<br>${escapeHtml(file.name.slice(0, 14))}</div>`;
        } else if (file.type.startsWith("video/")) {
          media = `<video src="${url}" muted onclick="openViewer('${f.id}', ${i})"></video>`;
        } else {
          media = `<img src="${url}" onclick="openViewer('${f.id}', ${i})" />`;
        }
        return `<div class="thumb-box">${media}<button class="del-btn" onclick="deleteSingleFile('${file.id}', '${escapeHtml(file.name)}')">×</button></div>`;
      }).join("") + `</div>` : "";

      return `
        <div class="folder-card">
          <div class="folder-header">
            <div class="folder-name">${escapeHtml(f.name)}</div>
            ${badge}
          </div>
          <div class="folder-desc">${escapeHtml(f.desc)}</div>
          <div class="actions">
            <button class="btn-primary btn-sm" onclick="triggerNativeCamera('${f.id}')">📷 Cámara</button>
            <button class="btn-dark btn-sm" onclick="triggerLiveCamera('${f.id}')">⚡ Ráfaga</button>
            <button class="btn-green btn-sm" onclick="triggerGallery('${f.id}', ${!!f.allowPdf})">📁 Subir Galería</button>
          </div>
          ${thumbsHtml}
        </div>
      `;
    }).join("");
  };
}

function findFolderById(fid) {
  return [...FOLDERS_TAB1, ...FOLDERS_TAB2, ...FOLDERS_TAB3].find(x => x.id === fid);
}

// ==========================================
// 1. CÁMARA NATIVA DIRECTA (SOLUCIÓN SEGURA)
// ==========================================
function triggerNativeCamera(folderId) {
  activeFolder = findFolderById(folderId);
  const inp = document.getElementById("nativeCamInput");
  inp.value = "";
  inp.click();
}

document.getElementById("nativeCamInput").addEventListener("change", async function(e) {
  if (!e.target.files || !e.target.files.length || !activeFolder) return;
  showToast("Procesando foto...");
  for (const file of e.target.files) {
    await processAndSaveImageFile(file, activeFolder, true);
  }
  renderFolders();
  showToast("Foto guardada");
});

// ==========================================
// 2. SUBIR DESDE GALERÍA / DOCUMENTOS
// ==========================================
function triggerGallery(folderId, allowPdf) {
  activeFolder = findFolderById(folderId);
  const inp = document.getElementById(allowPdf ? "pdfGalleryInput" : "galleryInput");
  inp.value = "";
  inp.click();
}

document.getElementById("galleryInput").addEventListener("change", handleGallerySelection);
document.getElementById("pdfGalleryInput").addEventListener("change", handleGallerySelection);

async function handleGallerySelection(e) {
  if (!e.target.files || !e.target.files.length || !activeFolder) return;
  showToast("Guardando archivos...");
  let count = 0;
  for (const file of e.target.files) {
    if (file.type.startsWith("image/")) {
      // Conserva nombre original, comprime si > 1MB (excepto 30°)
      await processAndSaveImageFile(file, activeFolder, false);
    } else {
      // Videos y PDFs se guardan directo con su nombre real
      await saveBlobToDB(file, file.name, file.type || "application/octet-stream", activeFolder.id);
    }
    count++;
  }
  renderFolders();
  showToast(`${count} archivo(s) guardado(s)`);
}

// ==========================================
// 3. CÁMARA EN RÁFAGA EN VIVO + VOLUMEN
// ==========================================
async function triggerLiveCamera(folderId) {
  activeFolder = findFolderById(folderId);
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showToast("Abriendo cámara del teléfono...");
    return triggerNativeCamera(folderId);
  }
  try {
    liveStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    const video = document.getElementById("camVideo");
    video.srcObject = liveStream;
    await video.play();
    sessionPhotosCount = 0;
    document.getElementById("camFolderLabel").textContent = activeFolder.name;
    document.getElementById("camSessionCount").textContent = "0";
    document.getElementById("camLastThumb").style.display = "none";
    document.getElementById("camModal").style.display = "flex";
  } catch (err) {
    showToast("Abriendo cámara nativa del celular...");
    triggerNativeCamera(folderId);
  }
}

function closeLiveCam() {
  if (liveStream) {
    liveStream.getTracks().forEach(t => t.stop());
    liveStream = null;
  }
  document.getElementById("camModal").style.display = "none";
  renderFolders();
}

function switchToNativeCam() {
  const fid = activeFolder ? activeFolder.id : null;
  closeLiveCam();
  if (fid) triggerNativeCamera(fid);
}

async function captureLiveFrame() {
  const video = document.getElementById("camVideo");
  if (!video || !video.videoWidth || !activeFolder) return;

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  drawWatermark(ctx, canvas.width, canvas.height);

  const maxBytes = activeFolder.highRes ? 15 * 1024 * 1024 : 950 * 1024;
  const blob = await canvasToCompressedBlob(canvas, maxBytes);
  const now = new Date();
  const fname = `IMG_${formatStampForFile(now)}.jpg`;

  await saveBlobToDB(blob, fname, "image/jpeg", activeFolder.id);

  sessionPhotosCount++;
  document.getElementById("camSessionCount").textContent = sessionPhotosCount;
  const thumb = document.getElementById("camLastThumb");
  thumb.src = URL.createObjectURL(blob);
  thumb.style.display = "block";
  showToast(`Foto #${sessionPhotosCount} guardada`, 1200);
}

// Disparo con botones de volumen cuando la cámara en vivo está abierta
window.addEventListener("keydown", e => {
  const camOpen = document.getElementById("camModal").style.display === "flex";
  if (!camOpen) return;
  if (e.key === "AudioVolumeUp" || e.key === "AudioVolumeDown" || e.key === "VolumeUp" || e.key === "VolumeDown" || e.code === "VolumeUp" || e.code === "VolumeDown") {
    e.preventDefault();
    const now = Date.now();
    if (now - lastVolumeShot > 600) {
      lastVolumeShot = now;
      captureLiveFrame();
    }
  }
});

// ==========================================
// PROCESAMIENTO DE IMAGEN, SELLO Y PESO
// ==========================================
async function processAndSaveImageFile(file, folder, applyStamp) {
  return new Promise(resolve => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = async () => {
      URL.revokeObjectURL(url);
      let w = img.naturalWidth;
      let h = img.naturalHeight;

      // Si no es alta resolución (30°) y es muy grande, escalar suavemente
      if (!folder.highRes && Math.max(w, h) > 1920) {
        const ratio = 1920 / Math.max(w, h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);

      if (applyStamp) {
        drawWatermark(ctx, w, h);
      }

      // Si es carpeta de 30° y no requiere sello, conservar archivo original si es posible
      if (folder.highRes && !applyStamp) {
        await saveBlobToDB(file, file.name, file.type || "image/jpeg", folder.id);
        return resolve();
      }

      const maxBytes = folder.highRes ? 15 * 1024 * 1024 : 950 * 1024;
      const outBlob = await canvasToCompressedBlob(canvas, maxBytes);
      await saveBlobToDB(outBlob, file.name, "image/jpeg", folder.id);
      resolve();
    };
    img.onerror = async () => {
      URL.revokeObjectURL(url);
      await saveBlobToDB(file, file.name, file.type || "image/jpeg", folder.id);
      resolve();
    };
    img.src = url;
  });
}

function drawWatermark(ctx, w, h) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeStr = now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });

  const lines = [];
  if (currentProject && currentProject.name) lines.push(currentProject.name);
  lines.push(`${dateStr} ${timeStr}`);
  if (cachedGps.lat && cachedGps.lon) lines.push(`GPS: ${cachedGps.lat}, ${cachedGps.lon}`);
  if (cachedGps.place) lines.push(cachedGps.place);

  const fontSize = Math.max(18, Math.round(Math.min(w, h) * 0.028));
  ctx.font = `600 ${fontSize}px sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";

  // Sin fondo negro: texto blanco puro con sombra sutil para lectura
  ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
  ctx.shadowBlur = Math.max(3, Math.round(fontSize * 0.18));
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.fillStyle = "#ffffff";

  const marginX = Math.round(w * 0.018);
  const marginY = Math.round(h * 0.018);
  const lineHeight = Math.round(fontSize * 1.25);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[lines.length - 1 - i];
    ctx.fillText(line, w - marginX, h - marginY - i * lineHeight);
  }
}

async function canvasToCompressedBlob(canvas, maxBytes) {
  let quality = 0.90;
  let blob = await new Promise(r => canvas.toBlob(r, "image/jpeg", quality));
  while (blob && blob.size > maxBytes && quality > 0.35) {
    quality -= 0.12;
    blob = await new Promise(r => canvas.toBlob(r, "image/jpeg", quality));
  }
  return blob;
}

function saveBlobToDB(blob, name, type, folderId) {
  return new Promise(resolve => {
    const item = {
      id: "f_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      projectId: currentProject.id,
      folderId,
      name,
      type,
      blob,
      createdAt: Date.now()
    };
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").add(item);
    tx.oncomplete = () => resolve();
  });
}

function deleteSingleFile(fileId, fileName) {
  if (!confirm(`¿Seguro que deseas eliminar "${fileName}"?`)) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(fileId);
  tx.oncomplete = () => {
    renderFolders();
    showToast("Archivo eliminado");
  };
}

// ==========================================
// VISOR CARRUSEL (IZQUIERDA / DERECHA)
// ==========================================
function openViewer(folderId, index) {
  const tx = db.transaction("files", "readonly");
  const idx = tx.objectStore("files").index("projectId");
  idx.getAll(currentProject.id).onsuccess = e => {
    viewerFiles = e.target.result.filter(x => x.folderId === folderId);
    if (!viewerFiles.length) return;
    viewerIndex = Math.max(0, Math.min(index, viewerFiles.length - 1));
    renderViewerSlide();
    document.getElementById("viewerModal").style.display = "flex";
  };
}

function openViewerFromCam() {
  if (!activeFolder || sessionPhotosCount === 0) return;
  openViewer(activeFolder.id, 9999);
}

function closeViewer() {
  document.getElementById("viewerModal").style.display = "none";
  viewerFiles = [];
}

function renderViewerSlide() {
  if (!viewerFiles.length) return closeViewer();
  const f = viewerFiles[viewerIndex];
  document.getElementById("viewerCounter").textContent = `${viewerIndex + 1} / ${viewerFiles.length}`;
  document.getElementById("viewerFileName").textContent = f.name;
  const box = document.getElementById("viewerContent");
  const url = URL.createObjectURL(f.blob);
  if (f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf")) {
    box.innerHTML = `<div style="color:#fff; text-align:center; padding:20px;"><div style="font-size:48px;">📄</div><p>${escapeHtml(f.name)}</p><a href="${url}" download="${escapeHtml(f.name)}" style="color:#60a5fa;">Abrir / Descargar PDF</a></div>`;
  } else if (f.type.startsWith("video/")) {
    box.innerHTML = `<video src="${url}" controls autoplay style="max-width:100%; max-height:100%;"></video>`;
  } else {
    box.innerHTML = `<img src="${url}" />`;
  }
}

function prevSlide() {
  if (!viewerFiles.length) return;
  viewerIndex = (viewerIndex - 1 + viewerFiles.length) % viewerFiles.length;
  renderViewerSlide();
}

function nextSlide() {
  if (!viewerFiles.length) return;
  viewerIndex = (viewerIndex + 1) % viewerFiles.length;
  renderViewerSlide();
}

function deleteFromViewer() {
  if (!viewerFiles.length) return;
  const f = viewerFiles[viewerIndex];
  if (!confirm(`¿Seguro que deseas eliminar "${f.name}"?`)) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(f.id);
  tx.oncomplete = () => {
    viewerFiles.splice(viewerIndex, 1);
    if (viewerIndex >= viewerFiles.length) viewerIndex = Math.max(0, viewerFiles.length - 1);
    renderFolders();
    renderViewerSlide();
    showToast("Archivo eliminado");
  };
}

// Gestos táctiles izquierda / derecha en el visor
let touchStartX = 0;
const touchArea = document.getElementById("viewerTouchArea");
touchArea.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
touchArea.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 45) {
    if (diff < 0) nextSlide();
    else prevSlide();
  }
}, { passive: true });

// ==========================================
// COMPRIMIR EN ZIP Y COMPARTIR
// ==========================================
async function exportZip(mode) {
  if (!currentProject) return;
  showToast("Generando ZIP completo...", 4000);

  let noAplicaBlob = null;
  try {
    const resp = await fetch("no_aplica.png");
    if (resp.ok) noAplicaBlob = await resp.blob();
  } catch (_) {}

  const allFiles = await new Promise(resolve => {
    const tx = db.transaction("files", "readonly");
    tx.objectStore("files").index("projectId").getAll(currentProject.id).onsuccess = e => resolve(e.target.result);
  });

  const zip = new JSZip();
  const rootName = sanitizePath(currentProject.name);
  const root = zip.folder(rootName);

  // 1. F17-CARPETA DE FOTOS
  const f1 = root.folder("1. F17-CARPETA DE FOTOS");
  for (const sub of FOLDERS_TAB1) {
    const sf = f1.folder(sanitizePath(sub.name));
    const items = allFiles.filter(x => x.folderId === sub.id);
    if (items.length) {
      addUniqueFilesToZipFolder(sf, items);
    } else if (noAplicaBlob) {
      sf.file("NO_APLICA.png", noAplicaBlob);
    }
  }

  // 2. FORMATOS MP
  const f2 = root.folder("2. FORMATOS MP");
  const items2 = allFiles.filter(x => x.folderId === "t2_01");
  if (items2.length) {
    addUniqueFilesToZipFolder(f2, items2);
  } else if (noAplicaBlob) {
    f2.file("NO_APLICA.png", noAplicaBlob);
  }

  // 3. MANTENIMIENTO PREVENTIVO
  const f3 = root.folder("3. MANTENIMIENTO PREVENTIVO");
  for (const sub of FOLDERS_TAB3) {
    const sf = f3.folder(sanitizePath(sub.name));
    const items = allFiles.filter(x => x.folderId === sub.id);
    if (items.length) {
      addUniqueFilesToZipFolder(sf, items);
    } else if (noAplicaBlob) {
      sf.file("NO_APLICA.png", noAplicaBlob);
    }
  }

  const zipBlob = await zip.generateAsync({ type: "blob", compression: "STORE" });
  const zipFileName = `${rootName}.zip`;

  if (mode === "download") {
    triggerDownload(zipBlob, zipFileName);
    showToast("ZIP descargado en tu teléfono");
  } else {
    const box = document.getElementById("shareReadyBox");
    const btn = document.getElementById("btnTriggerNativeShare");
    box.style.display = "block";
    showToast("ZIP listo. Toca el botón verde para enviar");

    btn.onclick = async () => {
      const fileObj = new File([zipBlob], zipFileName, { type: "application/zip" });
      if (navigator.canShare && navigator.canShare({ files: [fileObj] })) {
        try {
          await navigator.share({ files: [fileObj], title: zipFileName });
        } catch (err) {
          if (err.name !== "AbortError") {
            triggerDownload(zipBlob, zipFileName);
            showToast("Guardado en Descargas para compartir");
          }
        }
      } else {
        triggerDownload(zipBlob, zipFileName);
        showToast("Guardado en Descargas para compartir");
      }
    };
  }
}

function addUniqueFilesToZipFolder(zipFolder, items) {
  const usedNames = new Set();
  for (const it of items) {
    let fname = sanitizePath(it.name || "archivo.jpg");
    if (usedNames.has(fname)) {
      const dot = fname.lastIndexOf(".");
      const base = dot > 0 ? fname.slice(0, dot) : fname;
      const ext = dot > 0 ? fname.slice(dot) : "";
      let c = 2;
      while (usedNames.has(`${base}_${c}${ext}`)) c++;
      fname = `${base}_${c}${ext}`;
    }
    usedNames.add(fname);
    zipFolder.file(fname, it.blob);
  }
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function sanitizePath(str) {
  return str.replace(/[\\/:*?"<>|]/g, "_").trim();
}

function formatStampForFile(d) {
  const pad = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
