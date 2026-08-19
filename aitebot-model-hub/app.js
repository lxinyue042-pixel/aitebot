"use strict";

const MODELS = [
  { id: "BF-001", title: "波纹砂岩壁饰", category: "纹样浮雕", author: "筑构实验室", dimensions: "2400 × 260 × 2800 mm", material: "低碳水泥基材料", layer: "10 mm", lineWidth: "22 mm", speed: "85 mm/s", time: "5h 40m", shape: "wave", color: "#2e86b8", tags: ["流动纹样", "层积肌理", "光影"], description: "连续起伏的层纹模拟风蚀砂岩，让光线在凹凸表面缓慢游移，形成安静而有尺度感的墙面艺术。" },
  { id: "BF-002", title: "花瓣拱景雕塑", category: "装饰构件", author: "爱特沃设计组", dimensions: "1800 × 320 × 2400 mm", material: "细骨料混凝土", layer: "8 mm", lineWidth: "20 mm", speed: "78 mm/s", time: "4h 25m", shape: "arch", color: "#e0a938", tags: ["花瓣拱", "对称构图", "展陈艺术"], description: "柔和拱线被处理成一枚展开的花瓣轮廓，可单件陈列，也可连续排列成富有节奏的装饰序列。" },
  { id: "BF-003", title: "扭转层积图腾", category: "艺术雕塑", author: "参数建造研究组", dimensions: "1200 × 1200 × 3200 mm", material: "高流变打印砂浆", layer: "12 mm", lineWidth: "25 mm", speed: "72 mm/s", time: "7h 10m", shape: "tower", color: "#347eab", tags: ["扭转", "层积雕塑", "展会精选"], description: "逐层偏转的薄片围绕中轴向上生长，以连续旋动的剪影呈现机器人稳定、细腻的层积表达。" },
  { id: "BF-004", title: "折纸花庭装置", category: "景观装置", author: "城市打印工作室", dimensions: "2200 × 720 × 820 mm", material: "纤维增强砂浆", layer: "9 mm", lineWidth: "21 mm", speed: "80 mm/s", time: "3h 50m", shape: "bench", color: "#da6d3b", tags: ["折纸花瓣", "地景艺术", "放射构图"], description: "三层折面花瓣由中心向外绽放，低矮而舒展的体量像一朵停驻在场地上的几何花。" },
  { id: "BF-005", title: "蜂巢光影花窗", category: "装饰构件", author: "数字构筑社", dimensions: "2000 × 240 × 2600 mm", material: "地聚合物砂浆", layer: "8 mm", lineWidth: "18 mm", speed: "75 mm/s", time: "6h 15m", shape: "partition", color: "#b8a05a", tags: ["蜂巢纹样", "镂空", "光影构件"], description: "大小错落的六边单元组成当代花窗，随观看角度和光线变化投下疏密不同的几何影子。" },
  { id: "BF-006", title: "菌褶光影装置", category: "景观装置", author: "未来建造联合实验室", dimensions: "3600 × 3600 × 2850 mm", material: "快硬打印混凝土", layer: "12 mm", lineWidth: "26 mm", speed: "68 mm/s", time: "11h 20m", shape: "pavilion", color: "#91a7a0", tags: ["仿生形态", "放射纹理", "光影装置"], description: "放射状菌褶从纤细支点向外舒展，形成介于自然标本与未来地景之间的轻盈艺术装置。" },
  { id: "BF-007", title: "双曲涟漪壁饰", category: "纹样浮雕", author: "FORM-X", dimensions: "1600 × 300 × 2400 mm", material: "超高性能混凝土", layer: "6 mm", lineWidth: "16 mm", speed: "64 mm/s", time: "8h 05m", shape: "facade", color: "#5e8f83", tags: ["双曲纹样", "涟漪", "深浅层次"], description: "一组渐次扭转的曲线切片在平面上制造涟漪错觉，近看可见打印层纹，远看形成完整图景。" },
  { id: "BF-008", title: "螺旋生长图腾", category: "艺术雕塑", author: "绿建打印计划", dimensions: "900 × 900 × 1250 mm", material: "再生骨料砂浆", layer: "7 mm", lineWidth: "18 mm", speed: "82 mm/s", time: "2h 35m", shape: "planter", color: "#879b55", tags: ["三股螺旋", "生长形态", "再生材料"], description: "三股层积枝条沿中轴盘旋上升，疏密变化让坚硬材料呈现植物般的生长感与方向性。" },
  { id: "BF-009", title: "贝壳回声雕塑", category: "艺术雕塑", author: "壳体建造组", dimensions: "2600 × 2200 × 2300 mm", material: "纤维增强混凝土", layer: "10 mm", lineWidth: "24 mm", speed: "70 mm/s", time: "9h 45m", shape: "pod", color: "#cb8752", tags: ["同心壳纹", "放射肋线", "海洋意象"], description: "同心壳纹与放射肋线从一点展开，将贝壳的生长秩序转译成具有正面张力的立体雕塑。" },
  { id: "BF-010", title: "环流地景装置", category: "景观装置", author: "智能建造中心", dimensions: "4200 × 1100 × 1450 mm", material: "高强打印混凝土", layer: "10 mm", lineWidth: "24 mm", speed: "66 mm/s", time: "10h 30m", shape: "bridge", color: "#7e8a96", tags: ["悬浮环带", "流线", "场域艺术"], description: "三道起伏环带在空间中彼此追逐，像被凝固的气流，为开阔场地建立鲜明而轻盈的视觉焦点。" },
  { id: "BF-011", title: "层叠山峦壁饰", category: "纹样浮雕", author: "展会专项组", dimensions: "2800 × 1800 × 1100 mm", material: "细骨料混凝土", layer: "10 mm", lineWidth: "22 mm", speed: "88 mm/s", time: "4h 05m", shape: "stair", color: "#a88b68", tags: ["山形纹样", "多层浮雕", "东方意境"], description: "五重山脊以不同深度交叠，在简洁边框内形成由近及远的空间层次和东方山水意境。" },
  { id: "BF-012", title: "渐变空腔花柱", category: "装饰构件", author: "拓扑构筑小组", dimensions: "760 × 760 × 3000 mm", material: "高流变打印砂浆", layer: "8 mm", lineWidth: "20 mm", speed: "74 mm/s", time: "5h 20m", shape: "column", color: "#d39b36", tags: ["花柱", "渐变轮廓", "节律纹样"], description: "周期收放的空腔截面沿高度连续变化，生成兼具古典节律与数字精度的装饰性竖向标志。" }
];

const CARD_ICONS = {
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>'
};

const state = {
  category: "全部",
  query: "",
  sort: "featured",
  favoritesOnly: false,
  favorites: new Set(readJSON("buildform-favorites", [])),
  previewId: "BF-003",
  detailId: null,
  uploadedFiles: new Map(),
  uploadedGeometry: new Map(),
  viewers: [],
  searchIndex: 0
};

function restoreStateFromURL() {
  const params = new URLSearchParams(location.search);
  state.query = params.get("q") || "";
  const category = params.get("category"), sort = params.get("sort"), model = params.get("model");
  if (category && categories().includes(category)) state.category = category;
  if (["featured","name"].includes(sort)) state.sort = sort;
  state.favoritesOnly = params.get("favorites") === "1";
  state.detailId = model && findModel(model) ? model : null;
  if (state.detailId) state.previewId = state.detailId;
}

function syncControls() {
  $("#searchInput").value = state.query;
  const placeholder = $(".search-placeholder");
  if (placeholder) placeholder.textContent = state.query || "例如：波纹壁饰、BF-003 或作者…";
  $("#sortSelect").value = state.sort;
  $("#favoriteFilter").setAttribute("aria-pressed", String(state.favoritesOnly));
}

function syncURL() {
  const url = new URL(location.href), params = url.searchParams;
  const set = (key, value, empty) => value === empty ? params.delete(key) : params.set(key, value);
  set("q", state.query, "");
  set("category", state.category, "全部");
  set("sort", state.sort, "featured");
  set("favorites", state.favoritesOnly ? "1" : "", "");
  set("model", state.detailId || "", "");
  try { history.replaceState(history.state, "", `${url.pathname}${url.search}${url.hash}`); } catch {}
}

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

function slug(text) {
  return text.replace(/[\\/:*?"<>|\s]+/g, "-").replace(/^-|-$/g, "");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

const STL_FILE_LIMIT = 50 * 1024 * 1024;
const STL_PREVIEW_TRIANGLE_LIMIT = 4000;
const STL_NUMBER_PATTERN = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?\\d*)(?:[eE][-+]?\\d+)?";

function appendParsedTriangle(geometry, points) {
  if (points.length !== 3 || points.some(point => point.length !== 3 || point.some(value => !Number.isFinite(value)))) return;
  const [a,b,c] = points, ab = b.map((value,index) => value - a[index]), ac = c.map((value,index) => value - a[index]);
  const area = Math.hypot(ab[1]*ac[2]-ab[2]*ac[1], ab[2]*ac[0]-ab[0]*ac[2], ab[0]*ac[1]-ab[1]*ac[0]);
  if (!area) return;
  const base = geometry.vertices.length;
  geometry.vertices.push(a,b,c);
  geometry.faces.push([base,base+1,base+2]);
}

function binaryTriangleCount(buffer) {
  if (buffer.byteLength < 84) return 0;
  const count = new DataView(buffer).getUint32(80,true);
  return count > 0 && 84 + count * 50 <= buffer.byteLength ? count : 0;
}

function parseBinarySTL(buffer, triangleCount) {
  const geometry = { vertices: [], faces: [] }, view = new DataView(buffer);
  const step = Math.max(1, Math.ceil(triangleCount / STL_PREVIEW_TRIANGLE_LIMIT));
  for (let triangle = 0; triangle < triangleCount; triangle += step) {
    const points = [];
    let offset = 84 + triangle * 50 + 12;
    for (let vertex = 0; vertex < 3; vertex++) {
      points.push([view.getFloat32(offset,true),view.getFloat32(offset+4,true),view.getFloat32(offset+8,true)]);
      offset += 12;
    }
    appendParsedTriangle(geometry,points);
  }
  return normalizeGeometry(geometry);
}

function parseASCIISTL(text) {
  const geometry = { vertices: [], faces: [] };
  const facetCounter = /\bfacet\s+normal\b/gi;
  let facetCount = 0;
  while (facetCounter.exec(text)) facetCount++;
  if (!facetCount) throw new Error("未识别到 STL 三角面，请检查文件是否损坏。");
  const step = Math.max(1, Math.ceil(facetCount / STL_PREVIEW_TRIANGLE_LIMIT));
  const facetPattern = /\bfacet\s+normal\b[\s\S]*?\bendfacet\b/gi;
  const vertexPattern = new RegExp("\\bvertex\\s+(" + STL_NUMBER_PATTERN + ")\\s+(" + STL_NUMBER_PATTERN + ")\\s+(" + STL_NUMBER_PATTERN + ")","gi");
  let facetIndex = 0, facetMatch;
  while ((facetMatch = facetPattern.exec(text))) {
    if (facetIndex++ % step) continue;
    const points = [];
    let vertexMatch;
    vertexPattern.lastIndex = 0;
    while (points.length < 3 && (vertexMatch = vertexPattern.exec(facetMatch[0]))) {
      points.push(vertexMatch.slice(1,4).map(Number));
    }
    appendParsedTriangle(geometry,points);
  }
  return normalizeGeometry(geometry);
}

function parseSTL(buffer) {
  if (!(buffer instanceof ArrayBuffer) || buffer.byteLength < 15) throw new Error("STL 文件为空或结构不完整，请重新导出后再试。");
  const decoder = new TextDecoder("utf-8"), prefix = decoder.decode(buffer.slice(0,Math.min(512,buffer.byteLength)));
  const binaryCount = binaryTriangleCount(buffer);
  const looksASCII = /^\s*solid\b/i.test(prefix) && /\bfacet\s+normal\b/i.test(prefix) && !prefix.includes("\u0000");
  if (looksASCII) {
    try { return parseASCIISTL(decoder.decode(buffer)); }
    catch (error) { if (binaryCount) return parseBinarySTL(buffer,binaryCount); throw error; }
  }
  if (binaryCount) return parseBinarySTL(buffer,binaryCount);
  return parseASCIISTL(decoder.decode(buffer));
}

function addBox(g, x, y, z, width, height, depth) {
  const i = g.vertices.length, x0 = x - width / 2, x1 = x + width / 2, y0 = y - height / 2, y1 = y + height / 2, z0 = z - depth / 2, z1 = z + depth / 2;
  g.vertices.push([x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]);
  g.faces.push([i,i+2,i+1],[i,i+3,i+2],[i+4,i+5,i+6],[i+4,i+6,i+7],[i,i+1,i+5],[i,i+5,i+4],[i+3,i+7,i+6],[i+3,i+6,i+2],[i+1,i+2,i+6],[i+1,i+6,i+5],[i,i+4,i+7],[i,i+7,i+3]);
}

function addRotatedBox(g, x, y, z, width, height, depth, angleY = 0, angleZ = 0) {
  const base = g.vertices.length, cy = Math.cos(angleY), sy = Math.sin(angleY), cz = Math.cos(angleZ), sz = Math.sin(angleZ);
  addBox(g, 0, 0, 0, width, height, depth);
  for (let index = base; index < g.vertices.length; index++) {
    const [vx, vy, vz] = g.vertices[index], rx = vx * cy + vz * sy, rz = -vx * sy + vz * cy;
    g.vertices[index] = [x + rx * cz - vy * sz, y + rx * sz + vy * cz, z + rz];
  }
}

function addCylinder(g, x, y, z, radius, height, segments = 18) {
  const base = g.vertices.length;
  for (const py of [y - height / 2, y + height / 2]) for (let side = 0; side < segments; side++) {
    const angle = side / segments * Math.PI * 2;
    g.vertices.push([x + Math.cos(angle) * radius, py, z + Math.sin(angle) * radius]);
  }
  const bottom = g.vertices.length, top = bottom + 1;
  g.vertices.push([x,y-height/2,z],[x,y+height/2,z]);
  for (let side = 0; side < segments; side++) {
    const next = (side + 1) % segments;
    g.faces.push([base+side,base+segments+side,base+segments+next],[base+side,base+segments+next,base+next]);
    g.faces.push([bottom,base+next,base+side],[top,base+segments+side,base+segments+next]);
  }
}

function addBeam2D(g, x1, y1, x2, y2, z, thickness, depth) {
  const dx = x2 - x1, dy = y2 - y1;
  addRotatedBox(g, (x1+x2)/2, (y1+y2)/2, z, Math.hypot(dx,dy), thickness, depth, 0, Math.atan2(dy,dx));
}

function addLathe(g, profile, segments = 28, twist = 0) {
  const base = g.vertices.length;
  profile.forEach(([y, radius], row) => {
    for (let s = 0; s < segments; s++) {
      const angle = s / segments * Math.PI * 2 + y * twist;
      g.vertices.push([Math.cos(angle) * radius, y, Math.sin(angle) * radius]);
    }
    if (row) for (let s = 0; s < segments; s++) {
      const next = (s + 1) % segments, a = base + (row - 1) * segments + s, b = base + (row - 1) * segments + next, c = base + row * segments + next, d = base + row * segments + s;
      g.faces.push([a,d,c],[a,c,b]);
    }
  });
}

function addArch(g, outerR = 1.2, innerR = .68, depth = .45, legs = .9, segments = 18, zOffset = 0) {
  const base = g.vertices.length;
  for (const z of [-depth / 2, depth / 2]) for (let i = 0; i <= segments; i++) {
    const a = i / segments * Math.PI;
    g.vertices.push([Math.cos(a) * outerR, legs + Math.sin(a) * outerR, z + zOffset], [Math.cos(a) * innerR, legs + Math.sin(a) * innerR, z + zOffset]);
  }
  const row = (segments + 1) * 2;
  for (let side = 0; side < 2; side++) for (let i = 0; i < segments; i++) {
    const o = base + side * row + i * 2, n = o + 2;
    g.faces.push([o,n,n+1],[o,n+1,o+1]);
  }
  for (let i = 0; i < segments; i++) {
    const f = base + i * 2, b = base + row + i * 2;
    g.faces.push([f,b,b+2],[f,b+2,f+2],[f+1,f+3,b+3],[f+1,b+3,b+1]);
  }
  addBox(g, -(outerR + innerR) / 2, legs / 2, zOffset, outerR - innerR, legs, depth);
  addBox(g, (outerR + innerR) / 2, legs / 2, zOffset, outerR - innerR, legs, depth);
}

function geometryFor(model) {
  const uploaded = state.uploadedGeometry.get(model.id);
  if (uploaded) return uploaded;
  const g = { vertices: [], faces: [] };
  switch (model.shape) {
    case "wave": {
      for (let index = 0; index < 25; index++) {
        const x = (index - 12) * .105, z = Math.sin(index * .72) * .16;
        addBox(g, x, 0, z, .115, 1.92, .34);
      }
      addBox(g, 0, -1.02, 0, 2.72, .14, .68);
      addBox(g, 0, 1.02, 0, 2.72, .12, .58);
      break;
    }
    case "facade": {
      addBox(g,-1.12,0,0,.16,2.15,.36); addBox(g,1.12,0,0,.16,2.15,.36);
      addBox(g,0,1.02,0,2.1,.16,.36); addBox(g,0,-1.02,0,2.1,.16,.36);
      for (let index = 0; index < 11; index++) {
        const x = (index - 5) * .19, angle = Math.sin(index * .72) * .42;
        addRotatedBox(g,x,0,0,.1,1.9,.55,angle);
      }
      break;
    }
    case "arch":
      addArch(g,1.22,.72,.46,.88,24);
      addBox(g,-.97,-.04,0,.48,.14,.65); addBox(g,.97,-.04,0,.48,.14,.65);
      break;
    case "tower":
      addCylinder(g,0,-1.12,0,.82,.14,24);
      addBox(g,0,0,0,.34,2.25,.34);
      for (let level = 0; level < 42; level++) {
        const t = level / 41, y = -1.04 + level * 2.08 / 41, width = 1.46 - Math.sin(t*Math.PI)*.18;
        addRotatedBox(g,0,y,0,width,.038,.92,t*Math.PI*.72);
      }
      addCylinder(g,0,1.17,0,.32,.12,18);
      break;
    case "bench": {
      addCylinder(g,0,-.94,0,.54,.14,24);
      addCylinder(g,0,-.48,0,.12,.86,16);
      for (let ring = 0; ring < 3; ring++) {
        const count = 6, radius = .22 + ring * .28, y = -.5 + ring * .34;
        for (let petal = 0; petal < count; petal++) {
          const angle = petal / count * Math.PI * 2 + ring * Math.PI / 6;
          addRotatedBox(g,Math.cos(angle)*radius,y,Math.sin(angle)*radius,.66-ring*.05,.09,.22,-angle,(ring-1)*.12);
        }
      }
      addCylinder(g,0,.27,0,.22,.18,18);
      break;
    }
    case "partition": {
      addBox(g,-1.13,0,0,.14,2.2,.36); addBox(g,1.13,0,0,.14,2.2,.36);
      addBox(g,0,1.03,0,2.12,.14,.36); addBox(g,0,-1.03,0,2.12,.14,.36);
      const cells = [[-.58,.46],[.12,.46],[.7,.03],[-.25,-.2],[-.78,-.5],[.42,-.55]];
      cells.forEach(([cx,cy]) => {
        const points = Array.from({length:6},(_,side) => [cx+Math.cos(side*Math.PI/3)*.35,cy+Math.sin(side*Math.PI/3)*.35]);
        points.forEach((point,side) => addBeam2D(g,point[0],point[1],points[(side+1)%6][0],points[(side+1)%6][1],0,.065,.36));
      });
      break;
    }
    case "pavilion":
      addCylinder(g,0,-.95,0,1.08,.14,28);
      for (let index = 0; index < 7; index++) { const angle = index/7*Math.PI*2; addCylinder(g,Math.cos(angle)*.76,-.16,Math.sin(angle)*.76,.06,1.48,12); }
      addLathe(g, [[.5,1.14],[.64,1.2],[.82,.92],[1.02,.48],[1.13,.08]], 32);
      break;
    case "planter": {
      addCylinder(g,0,-1.02,0,.48,.14,26);
      addCylinder(g,0,-.05,0,.09,1.86,14);
      for (let level = 0; level < 22; level++) {
        const t = level / 21, y = -.88 + t * 1.78, radius = .25 + Math.sin(t*Math.PI)*.24;
        for (let arm = 0; arm < 3; arm++) {
          const angle = level * .42 + arm * Math.PI * 2 / 3;
          addRotatedBox(g,Math.cos(angle)*radius,y,Math.sin(angle)*radius,.31,.075,.12,-angle-Math.PI/2,Math.sin(t*Math.PI)*.08);
        }
      }
      addCylinder(g,0,.98,0,.24,.15,18);
      break;
    }
    case "pod": {
      [0.5,.72,.94,1.16].forEach((radius,index) => addArch(g,radius,radius-.1,.14,.08,24,(index-1.5)*.055));
      for (let ray = 0; ray <= 8; ray++) {
        const angle = ray / 8 * Math.PI;
        addBeam2D(g,0,.08,Math.cos(angle)*1.15,.08+Math.sin(angle)*1.15,0,.055,.17);
      }
      addCylinder(g,0,.17,.08,.15,.22,18);
      break;
    }
    case "bridge": {
      for (let ring = 0; ring < 3; ring++) {
        const points = [], phase = ring * Math.PI * 2 / 3;
        for (let segment = 0; segment < 32; segment++) {
          const angle = segment / 32 * Math.PI * 2, ripple = 1 + Math.sin(angle*3+phase)*.08;
          points.push([Math.cos(angle)*(1.18-ring*.13)*ripple,(ring-1)*.24+Math.sin(angle*2+phase)*.13,Math.sin(angle)*(.7+ring*.1)*ripple]);
        }
        points.forEach((point,index) => {
          const next = points[(index+1)%points.length], dx = next[0]-point[0], dy = next[1]-point[1], dz = next[2]-point[2];
          addRotatedBox(g,(point[0]+next[0])/2,(point[1]+next[1])/2,(point[2]+next[2])/2,Math.hypot(dx,dy,dz)+.025,.075,.11,-Math.atan2(dz,dx),Math.atan2(dy,Math.hypot(dx,dz)));
        });
      }
      break;
    }
    case "stair": {
      addBox(g,0,0,-.12,2.5,1.9,.14);
      for (let ridge = 0; ridge < 5; ridge++) {
        const points = [];
        for (let index = 0; index <= 10; index++) {
          const x = -1.12 + index * .224, envelope = 1-Math.abs(x)/1.3;
          points.push([x,-.58+ridge*.25+Math.sin(index*.82+ridge*.9)*(.1+ridge*.018)+envelope*.18]);
        }
        for (let index = 0; index < points.length-1; index++) addBeam2D(g,points[index][0],points[index][1],points[index+1][0],points[index+1][1],.015+ridge*.035,.055,.11);
      }
      addBox(g,-1.2,0,.01,.07,2.05,.22); addBox(g,1.2,0,.01,.07,2.05,.22);
      addBox(g,0,-.99,.01,2.47,.07,.22); addBox(g,0,.99,.01,2.47,.07,.22);
      break;
    }
    case "column": {
      const profile = [];
      for (let i = 0; i <= 20; i++) { const y = -.98 + i * 1.96 / 20; profile.push([y, .39 + Math.sin(i/20*Math.PI*4)*.065]); }
      addCylinder(g,0,-1.1,0,.61,.2,24); addLathe(g,profile,28,.22); addCylinder(g,0,1.08,0,.55,.18,24); break;
    }
    default: addBox(g, 0, 0, 0, 1.6, 2, .5);
  }
  normalizeGeometry(g);
  return g;
}

function normalizeGeometry(g) {
  if (!g.vertices.length || !g.faces.length) throw new Error("STL 中没有可预览的有效三角面，请检查模型后再试。");
  const mins = [Infinity,Infinity,Infinity], maxs = [-Infinity,-Infinity,-Infinity];
  g.vertices.forEach(v => v.forEach((n,i) => { mins[i] = Math.min(mins[i],n); maxs[i] = Math.max(maxs[i],n); }));
  const extent = Math.max(...maxs.map((n,i) => n - mins[i]));
  if (!Number.isFinite(extent) || extent <= 0) throw new Error("STL 几何尺寸无效，请重新导出后再试。");
  const center = mins.map((n,i) => (n + maxs[i]) / 2), scale = 2.25 / extent;
  g.vertices = g.vertices.map(v => v.map((n,i) => (n - center[i]) * scale));
  return g;
}

function createViewer(canvas, model, options = {}) {
  const ctx = canvas.getContext("2d"), geometry = geometryFor(model);
  let yaw = options.yaw ?? -.62, pitch = options.pitch ?? -.24, zoom = options.zoom ?? 1, dragging = false, hovered = false, focused = false, lastX = 0, lastY = 0, frame = 0, alive = true;
  let metrics = { width: 1, height: 1, ratio: 1 };
  const color = hexToRgb(model.color), reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches, listeners = [];
  function updateSize(cssWidth, cssHeight) {
    if (!alive) return;
    const ratio = Math.min(devicePixelRatio || 1, 2), width = Math.max(1, Math.round(cssWidth * ratio)), height = Math.max(1, Math.round(cssHeight * ratio));
    metrics = { width, height, ratio };
    if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
    draw();
  }
  function measure() {
    const rect = canvas.getBoundingClientRect();
    updateSize(rect.width, rect.height);
  }
  function rotate(v) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    const x = v[0] * cy - v[2] * sy, z = v[0] * sy + v[2] * cy;
    return [x, v[1] * cp - z * sp, v[1] * sp + z * cp];
  }
  function draw() {
    if (!alive) return;
    const { width, height, ratio } = metrics, scale = Math.min(width, height) * .34 * zoom;
    ctx.clearRect(0,0,width,height);
    const points = geometry.vertices.map(rotate);
    const faces = geometry.faces.map(face => {
      const a=points[face[0]], b=points[face[1]], c=points[face[2]], ux=b[0]-a[0], uy=b[1]-a[1], uz=b[2]-a[2], vx=c[0]-a[0], vy=c[1]-a[1], vz=c[2]-a[2];
      const nx=uy*vz-uz*vy, ny=uz*vx-ux*vz, nz=ux*vy-uy*vx, len=Math.hypot(nx,ny,nz)||1, light=Math.max(.18,(nx*.35+ny*.58+nz*.72)/len*.45+.55);
      return { face, depth:(a[2]+b[2]+c[2])/3, light };
    }).sort((a,b) => a.depth - b.depth);
    ctx.lineJoin = "round";
    faces.forEach(({face,light}) => {
      ctx.beginPath();
      face.forEach((index,i) => { const p=points[index], x=width/2+p[0]*scale, y=height/2-p[1]*scale; i ? ctx.lineTo(x,y) : ctx.moveTo(x,y); });
      ctx.closePath();
      ctx.fillStyle = `rgb(${Math.round(color[0]*light)},${Math.round(color[1]*light)},${Math.round(color[2]*light)})`;
      ctx.fill();
      ctx.strokeStyle = options.dark ? "rgba(230,238,226,.13)" : "rgba(30,34,28,.16)";
      ctx.lineWidth = Math.max(1, ratio*.5); ctx.stroke();
    });
  }
  function animate() { if (!alive) return; if (!dragging && !hovered && !focused) { yaw += .0025; draw(); } frame = requestAnimationFrame(animate); }
  const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(entries => { const rect=entries[0]?.contentRect; if(rect) updateSize(rect.width,rect.height); }) : null;
  const listen = (type, handler, options) => { canvas.addEventListener(type, handler, options); listeners.push([type,handler,options]); };
  measure();
  resizeObserver?.observe(canvas);
  if (options.interactive) {
    listen("pointerdown", e => { dragging=true; lastX=e.clientX; lastY=e.clientY; canvas.focus({preventScroll:true}); canvas.setPointerCapture(e.pointerId); });
    listen("pointerenter", () => hovered=true);
    listen("pointerleave", () => { hovered=false; dragging=false; });
    listen("focus", () => focused=true);
    listen("blur", () => focused=false);
    listen("pointermove", e => { if (!dragging) return; yaw += (e.clientX-lastX)*.009; pitch=Math.max(-1.15,Math.min(.8,pitch+(e.clientY-lastY)*.008)); lastX=e.clientX; lastY=e.clientY; draw(); });
    const stopDragging = () => dragging=false;
    listen("pointerup", stopDragging);
    listen("pointercancel", stopDragging);
    listen("wheel", e => { e.preventDefault(); zoom=Math.max(.65,Math.min(1.65,zoom-e.deltaY*.001)); draw(); }, { passive:false });
    listen("keydown", e => {
      let handled = true;
      if (e.key === "ArrowLeft") yaw -= .12;
      else if (e.key === "ArrowRight") yaw += .12;
      else if (e.key === "ArrowUp") pitch = Math.max(-1.15,pitch-.1);
      else if (e.key === "ArrowDown") pitch = Math.min(.8,pitch+.1);
      else if (["+","="].includes(e.key)) zoom = Math.min(1.65,zoom+.08);
      else if (["-","_"].includes(e.key)) zoom = Math.max(.65,zoom-.08);
      else handled = false;
      if (handled) { e.preventDefault(); draw(); }
    });
  }
  if (options.autoRotate && !reducedMotion) animate(); else draw();
  const viewer = { draw, resize:measure, destroy(){ if(!alive)return; alive=false; cancelAnimationFrame(frame); resizeObserver?.disconnect(); listeners.forEach(([type,handler,options])=>canvas.removeEventListener(type,handler,options)); state.viewers=state.viewers.filter(item=>item!==viewer); } };
  state.viewers.push(viewer);
  return viewer;
}

function hexToRgb(hex) {
  const value = parseInt(hex.slice(1),16);
  return [value>>16,(value>>8)&255,value&255];
}

function disposeCardViewers() {
  state.viewers.filter(v => v.card).forEach(v => v.destroy());
  state.viewers = state.viewers.filter(v => !v.card);
}

function categories() {
  return ["全部", ...new Set(MODELS.map(model => model.category))];
}

function renderCategories() {
  $("#categoryTabs").innerHTML = categories().map(category => `<button class="${state.category===category?"active":""}" data-category="${escapeHTML(category)}" aria-pressed="${state.category===category}">${category==="全部"?"全部模型":escapeHTML(category)}</button>`).join("");
  $("#quickCategories").querySelectorAll("button[data-category]").forEach(button => {
    const active = state.category === button.dataset.category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $$('[data-nav-category]').forEach(link => {
    const active = link.dataset.navCategory === state.category;
    link.classList.toggle("active", active);
    link.setAttribute("aria-current", active ? "page" : "false");
  });
  $$(".category-dock [data-category]").forEach(button => {
    const active = button.dataset.category === state.category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function searchMatches() {
  const query = state.query.trim().toLowerCase();
  const source = query ? MODELS.filter(model => [model.id,model.title,model.category,model.material,model.author,...model.tags].join(" ").toLowerCase().includes(query)) : MODELS.slice(0,6);
  return source.slice(0,8);
}

function renderSearchResults() {
  const host = $("#searchResults"), models = searchMatches();
  state.searchIndex = Math.max(0, Math.min(state.searchIndex, models.length - 1));
  host.innerHTML = models.length ? models.map((model,index) => `
    <button class="search-result ${index===state.searchIndex?"is-active":""}" type="button" role="option" aria-selected="${index===state.searchIndex}" data-search-model="${model.id}">
      <span><small>${model.id} / ${escapeHTML(model.category)}</small><b>${escapeHTML(model.title)}</b></span>
      <span>${escapeHTML(model.author)}</span>
    </button>`).join("") : `<p class="search-empty">没有找到匹配模型。试试“壁饰”“图腾”或“砂浆”。</p>`;
}

function openSearch() {
  const dialog = $("#searchDialog");
  if (!dialog.open) dialog.showModal();
  state.searchIndex = 0;
  renderSearchResults();
  requestAnimationFrame(() => { $("#searchInput").focus(); $("#searchInput").select(); });
}

function closeSearch() {
  const dialog = $("#searchDialog");
  if (dialog.open) dialog.close();
  $("#openSearch").focus({preventScroll:true});
}

function filteredModels() {
  const query = state.query.trim().toLowerCase();
  const list = MODELS.filter(model => (state.category === "全部" || model.category === state.category) && (!state.favoritesOnly || state.favorites.has(model.id)) && (!query || [model.id,model.title,model.category,model.material,model.author,...model.tags].join(" ").toLowerCase().includes(query)));
  if (state.sort === "name") list.sort((a,b) => a.title.localeCompare(b.title,"zh-CN"));
  return list;
}

let heroViewer;

function renderModels() {
  disposeCardViewers();
  const models = filteredModels(), grid = $("#modelGrid");
  if (models.length && !models.some(model => model.id === state.previewId)) state.previewId = models[0].id;
  grid.innerHTML = models.map((model,index) => `
    <article class="model-record ${state.previewId===model.id?"is-selected":""}" role="listitem">
      <button class="record-select" type="button" data-select="${model.id}" aria-current="${state.previewId===model.id?"true":"false"}" aria-label="查看${escapeHTML(model.title)}详情">
        <span class="record-preview"><canvas data-preview="${model.id}" aria-hidden="true"></canvas><span class="record-id">${escapeHTML(model.category)}</span><span class="record-overlay"><strong>${escapeHTML(model.title)}</strong><span>${escapeHTML(model.author)}</span></span></span>
      </button>
      <div class="record-actions">
        <button class="record-favorite ${state.favorites.has(model.id)?"active":""}" type="button" data-favorite="${model.id}" aria-label="${state.favorites.has(model.id)?"取消收藏":"收藏"}${escapeHTML(model.title)}">${CARD_ICONS.heart}</button>
      </div>
    </article>`).join("");
  $("#resultCount").textContent = `${models.length} 个模型`;
  const placeholder = $(".search-placeholder");
  if (placeholder) placeholder.textContent = state.query || "例如：波纹壁饰、BF-003 或作者…";
  $("#emptyState").hidden = models.length > 0;
  grid.hidden = models.length === 0;
  requestAnimationFrame(() => {
    $$('[data-preview]').forEach(canvas => { const viewer = createViewer(canvas, findModel(canvas.dataset.preview), { yaw: -.7, pitch: -.25 }); viewer.card = true; });
    renderInspector(findModel(state.previewId));
  });
  updateCounts();
  syncURL();
}

function findModel(id) { return MODELS.find(model => model.id === id); }

function renderInspector(model) {
  if (!model) return;
  $("#inspectorCode").textContent = model.id;
  $("#inspectorCategory").textContent = `${model.category} / 可打印模型`;
  $("#inspectorTitle").textContent = model.title;
  $("#inspectorDescription").textContent = model.description;
  $("#inspectorAuthor").textContent = model.author;
  $("#inspectorDimensions").textContent = model.dimensions;
  $("#inspectorMaterial").textContent = model.material;
  $("#inspectorLayer").textContent = model.layer;
  $("#inspectorTime").textContent = model.time;
  updateInspectorFavorite();
  if (heroViewer?.modelId === model.id) { heroViewer.resize(); return; }
  heroViewer?.destroy();
  heroViewer = createViewer($("#heroCanvas"), model, { interactive:true, autoRotate:true, yaw:-.55, pitch:-.24, zoom:1.06 });
  heroViewer.modelId = model.id;
}

function selectModel(id) {
  const model = findModel(id); if (!model) return;
  state.previewId = id;
  $$(".model-record", $("#modelGrid")).forEach(record => {
    const selected = $("[data-select]", record)?.dataset.select === id;
    record.classList.toggle("is-selected", selected);
    $("[data-select]", record)?.setAttribute("aria-current", String(selected));
  });
  renderInspector(model);
}

function updateInspectorFavorite() {
  const button = $("#inspectorFavorite");
  if (!button) return;
  const model = findModel(state.previewId), active = state.favorites.has(state.previewId);
  button.setAttribute("aria-pressed", String(active));
  button.setAttribute("aria-label", `${active?"取消收藏":"收藏"}${model?.title || "当前模型"}`);
}

function updateCounts() {
  $("#favoriteCount").textContent = state.favorites.size;
  $("#navFavoriteCount").textContent = state.favorites.size;
  updateInspectorFavorite();
}

function toggleFavorite(id) {
  state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
  localStorage.setItem("buildform-favorites", JSON.stringify([...state.favorites]));
  renderModels();
  if (state.detailId === id && $("#modelDialog").open) updateDetailFavorite();
}

let detailViewer, detailClosing = false;
function openModel(id) {
  const model = findModel(id); if (!model) return;
  selectModel(id);
  state.detailId = id;
  syncURL();
  $("#detailCategory").textContent = `${model.category} / 可打印模型`;
  $("#detailTitle").textContent = model.title;
  $("#detailDescription").textContent = model.description;
  $("#detailAuthor").textContent = model.author;
  $("#detailCode").textContent = `${model.id} / 机器人适配 / STL`;
  $("#detailSpecs").innerHTML = [["适配对象","筑墙智匠"],["模型尺寸",model.dimensions],["建议材料",model.material],["层高",model.layer],["线宽",model.lineWidth],["打印速度",model.speed],["预计耗时",model.time]].map(([key,value]) => `<div><dt>${key}</dt><dd>${escapeHTML(value)}</dd></div>`).join("");
  $("#detailTags").innerHTML = model.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("");
  updateDetailFavorite();
  const dialog = $("#modelDialog"); detailClosing=false; dialog.showModal();
  requestAnimationFrame(() => { detailViewer?.destroy(); detailViewer=createViewer($("#detailCanvas"),model,{interactive:true,autoRotate:true,yaw:-.55,pitch:-.2}); });
}

function closeModel() {
  const dialog=$("#modelDialog");
  if (!dialog.open || detailClosing) return;
  detailViewer?.destroy();
  detailViewer=undefined; state.detailId=null; syncURL();
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !dialog.animate) { dialog.close(); return; }
  detailClosing=true;
  const animation=dialog.animate([{opacity:1,transform:"translateY(0) scale(1)"},{opacity:0,transform:"translateY(8px) scale(.985)"}],{duration:140,easing:"cubic-bezier(.23, 1, .32, 1)"});
  const finish=()=>{ if(dialog.open) dialog.close(); detailClosing=false; };
  animation.onfinish=finish; animation.oncancel=finish;
}

function updateDetailFavorite() {
  const button=$("#detailFavorite"), active=state.favorites.has(state.detailId);
  button.setAttribute("aria-pressed",String(active));
  button.textContent=active?"已收藏，点击取消":"收藏模型";
}

function geometryToSTL(model) {
  const g=geometryFor(model), lines=[`solid ${slug(model.title)}`];
  g.faces.forEach(face => {
    const [a,b,c]=face.map(i=>g.vertices[i]), u=b.map((n,i)=>n-a[i]), v=c.map((n,i)=>n-a[i]), n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]], len=Math.hypot(...n)||1;
    lines.push(`  facet normal ${n.map(x=>(x/len).toFixed(6)).join(" ")}`,"    outer loop",...([a,b,c].map(p=>`      vertex ${p.map(x=>(x*1000).toFixed(4)).join(" ")}`)),"    endloop","  endfacet");
  });
  lines.push(`endsolid ${slug(model.title)}`); return lines.join("\n");
}

function saveBlob(blob, filename) {
  const url=URL.createObjectURL(blob), link=document.createElement("a"); link.href=url; link.download=filename; document.body.append(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function downloadSTL(model) {
  if (!model) return;
  const uploaded = state.uploadedFiles.get(model.id);
  const blob = uploaded || new Blob([geometryToSTL(model)],{type:"model/stl"});
  saveBlob(blob,model.id + "-" + slug(model.title) + ".stl");
  showToast("STL 模型已下载");
}

async function handleUpload(event) {
  event.preventDefault();
  const form = event.currentTarget, fileInput = $("#uploadFile"), file = fileInput.files[0], status = $("#uploadStatus"), submit = $(".submit-upload",form);
  const fail = message => {
    status.textContent = message;
    fileInput.setAttribute("aria-invalid","true");
    fileInput.focus();
  };
  status.textContent = "";
  fileInput.removeAttribute("aria-invalid");
  if (!file) { fail("请选择 STL 文件后再加入模型库。"); return; }
  if (!/\.stl$/i.test(file.name)) { fail("只支持 .stl 文件，请重新选择。"); return; }
  if (file.size > STL_FILE_LIMIT) { fail("STL 文件超过 50 MB，请先减面后再试。"); return; }
  submit.disabled = true;
  submit.setAttribute("aria-busy","true");
  submit.textContent = "解析模型…";
  try {
    const geometry = parseSTL(await file.arrayBuffer());
    const id = "LOCAL-" + String(Date.now()).slice(-5);
    const model = { id,title:$("#uploadName").value.trim(),category:$("#uploadCategory").value,author:"本地演示用户",dimensions:$("#uploadDimensions").value.trim(),material:$("#uploadMaterial").value.trim(),layer:"10 mm",lineWidth:"22 mm",speed:"75 mm/s",time:"待切片",shape:"uploaded",color:"#76b900",tags:["本地上传","装饰模型","STL"],description:"本地发布装饰模型。文件不会上传到网络，刷新页面后该记录将被清除。" };
    MODELS.unshift(model);
    state.uploadedFiles.set(id,file);
    state.uploadedGeometry.set(id,geometry);
    state.category = "全部";
    state.query = "";
    $("#searchInput").value = "";
    renderCategories();
    renderModels();
    $("#uploadDialog").close();
    form.reset();
    setTimeout(()=>openModel(id),250);
  } catch (error) {
    fail(error instanceof Error ? error.message : "无法解析 STL，请重新导出后再试。");
  } finally {
    submit.disabled = false;
    submit.removeAttribute("aria-busy");
    submit.textContent = "加入模型库";
  }
}

let offlineReady = false;

function updateNetwork() {
  const online = navigator.onLine, node = $("#networkState");
  node.classList.toggle("offline",!online);
  $("span",node).textContent = !online ? "离线演示模式" : offlineReady ? "在线 · 离线缓存就绪" : window.isSecureContext ? "在线 · 离线缓存准备中" : "在线浏览";
  node.title = !online ? "当前无网络，正在使用已缓存内容" : offlineReady ? "在线，离线缓存可用" : window.isSecureContext ? "在线，正在准备离线缓存" : "在线浏览；启用 HTTPS 后可使用离线缓存";
}

async function initOffline() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) { updateNetwork(); return; }
  try {
    await navigator.serviceWorker.register("./sw.js?v=28.1");
    await navigator.serviceWorker.ready;
    offlineReady = true;
  } catch {}
  updateNetwork();
}

function initReveals() {
  const nodes=$$("[data-reveal]");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { nodes.forEach(node=>node.classList.add("is-visible")); return; }
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{ if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);} }),{threshold:.12,rootMargin:"0px 0px -7% 0px"});
  nodes.forEach(node=>observer.observe(node));
}

function bindEvents() {
  $$('[data-scroll-target]').forEach(link=>link.addEventListener("click",e=>{e.preventDefault();$("#"+link.dataset.scrollTarget).scrollIntoView({behavior:"smooth"});}));
  $$(".main-nav, .category-dock").forEach(nav=>nav.addEventListener("click",e=>{ const link=e.target.closest("[data-category], [data-nav-category]"); if(!link)return; e.preventDefault(); state.category=link.dataset.category || link.dataset.navCategory;state.query="";state.favoritesOnly=false;syncControls();renderCategories();renderModels();$("#catalog").scrollIntoView({behavior:"smooth"}); }));
  $("#quickCategories").addEventListener("click",e=>{ const button=e.target.closest("button[data-category]"); if(!button)return; state.category=button.dataset.category;state.query="";state.favoritesOnly=false;syncControls();renderCategories();renderModels();$("#catalog").scrollIntoView({behavior:"smooth"}); });
  $("#categoryTabs").addEventListener("click",e=>{ const button=e.target.closest("button[data-category]"); if(!button)return; state.category=button.dataset.category; renderCategories(); renderModels(); });
  $("#modelGrid").addEventListener("click",e=>{ const favorite=e.target.closest("[data-favorite]"); if(favorite){toggleFavorite(favorite.dataset.favorite);return;} const select=e.target.closest("[data-select]"); if(select)openModel(select.dataset.select); });
  document.addEventListener("click",e=>{ const showcase=e.target.closest("[data-showcase]"); if(showcase)openModel(showcase.dataset.showcase); });
  $("#openSearch").addEventListener("click",openSearch);
  $("#closeSearch").addEventListener("click",closeSearch);
  $("#searchDialog").addEventListener("click",e=>{ if(e.target===$("#searchDialog"))closeSearch(); });
  $("#searchDialog").addEventListener("cancel",e=>{e.preventDefault();closeSearch();});
  $("#searchResults").addEventListener("click",e=>{ const result=e.target.closest("[data-search-model]"); if(!result)return; closeSearch(); openModel(result.dataset.searchModel); });
  $("#searchInput").addEventListener("input",e=>{ state.query=e.target.value; state.searchIndex=0; renderSearchResults(); renderModels(); });
  $("#searchInput").addEventListener("keydown",e=>{
    const models=searchMatches(); if(!models.length)return;
    if(e.key==="ArrowDown"){e.preventDefault();state.searchIndex=(state.searchIndex+1)%models.length;renderSearchResults();}
    else if(e.key==="ArrowUp"){e.preventDefault();state.searchIndex=(state.searchIndex-1+models.length)%models.length;renderSearchResults();}
    else if(e.key==="Enter"){e.preventDefault();const model=models[state.searchIndex];if(model){closeSearch();openModel(model.id);}}
  });
  $("#sortSelect").addEventListener("change",e=>{ state.sort=e.target.value; renderModels(); });
  $("#favoriteFilter").addEventListener("click",e=>{ state.favoritesOnly=!state.favoritesOnly; e.currentTarget.setAttribute("aria-pressed",String(state.favoritesOnly)); renderModels(); });
  $("#clearFilters").addEventListener("click",()=>{ state.category="全部";state.query="";state.favoritesOnly=false;$("#searchInput").value="";$("#favoriteFilter").setAttribute("aria-pressed","false");syncControls();renderCategories();renderModels(); });
  $("#closeModel").addEventListener("click",closeModel); $("#modelDialog").addEventListener("click",e=>{if(e.target===$("#modelDialog"))closeModel();}); $("#modelDialog").addEventListener("cancel",e=>{e.preventDefault();closeModel();});
  $("#detailFavorite").addEventListener("click",()=>toggleFavorite(state.detailId)); $("#downloadStl").addEventListener("click",()=>downloadSTL(findModel(state.detailId)));
  $("#heroOpenModel").addEventListener("click",()=>openModel(state.previewId));
  $("#quickDownload").addEventListener("click",()=>downloadSTL(findModel(state.previewId)));
  $("#inspectorFavorite").addEventListener("click",()=>toggleFavorite(state.previewId));
  $("#navFavorite").addEventListener("click",()=>{state.favoritesOnly=true;$("#favoriteFilter").setAttribute("aria-pressed","true");renderModels();$("#catalog").scrollIntoView({behavior:"smooth"});});
  $("#openUpload").addEventListener("click",()=>$("#uploadDialog").showModal()); $("#closeUpload").addEventListener("click",()=>$("#uploadDialog").close()); $("#uploadForm").addEventListener("submit",handleUpload);
  document.addEventListener("keydown",e=>{ if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openSearch();} });
  addEventListener("online",updateNetwork); addEventListener("offline",updateNetwork); addEventListener("resize",()=>state.viewers.forEach(v=>v.resize()));
}

function init() {
  restoreStateFromURL(); syncControls();
  const initialDetail = state.detailId;
  renderCategories(); renderModels(); bindEvents(); updateNetwork(); updateCounts();
  initReveals();
  if (initialDetail) openModel(initialDetail);
  initOffline();
}

document.addEventListener("DOMContentLoaded",init);
