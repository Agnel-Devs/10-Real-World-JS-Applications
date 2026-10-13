const image = document.getElementById('choosen-image');
const uploadBtn = document.getElementById('upload-btn');
const downloadBtn = document.getElementById('download-btn');
const imageContainer = document.querySelector('.image-container');

const controls = {
  blur: document.getElementById('blur'),
  contrast: document.getElementById('contrast'),
  huerotate: document.getElementById('huerotate'),
  sepia: document.getElementById('sepia'),
};

const displayValues = {
  blur: document.getElementById('blurvalue'),
  contrast: document.getElementById('contrastvalue'),
  huerotate: document.getElementById('huerotatevalue'),
  sepia: document.getElementById('sepiavalue'),
};

const flipRadios = document.querySelectorAll('input[name="flip"]');

const state = {
  blur: Number(controls.blur.value),
  contrast: 100 + Number(controls.contrast.value),
  huerotate: Number(controls.huerotate.value),
  sepia: Number(controls.sepia.value),
  flipX: 1,
  flipY: 1,
};

function updateFilterStyles() {
  const filter = `blur(${state.blur}px) contrast(${state.contrast}%) hue-rotate(${state.huerotate}deg) sepia(${state.sepia}%)`;
  const transform = `scaleX(${state.flipX}) scaleY(${state.flipY})`;

  image.style.filter = filter;
  image.style.transform = transform;
}

function updateDisplayValues() {
  displayValues.blur.textContent = `${state.blur}px`;
  displayValues.contrast.textContent = `${state.contrast}%`;
  displayValues.huerotate.textContent = `${state.huerotate}°`;
  displayValues.sepia.textContent = `${state.sepia}%`;
}

function setStateFromInput(name, value) {
  if (name === 'contrast') {
    state.contrast = 100 + Number(value);
  } else {
    state[name] = Number(value);
  }

  updateFilterStyles();
  updateDisplayValues();
}

Object.entries(controls).forEach(([name, input]) => {
  input.addEventListener('input', () => setStateFromInput(name, input.value));
});

flipRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (!radio.checked) return;

    switch (radio.id) {
      case 'flip-x':
        state.flipX = -1;
        state.flipY = 1;
        break;
      case 'flip-y':
        state.flipX = 1;
        state.flipY = -1;
        break;
      default:
        state.flipX = 1;
        state.flipY = 1;
    }

    updateFilterStyles();
  });
});

uploadBtn.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  image.src = url;

  image.addEventListener(
    'load',
    function handleLoad() {
      imageContainer.style.display = 'block';
      updateFilterStyles();
      URL.revokeObjectURL(url);
      image.removeEventListener('load', handleLoad);
    },
    { once: true }
  );
});

function downloadEditedImage() {
  if (!image.src) return;
  if (!image.naturalWidth || !image.naturalHeight) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const filter = `blur(${state.blur}px) contrast(${state.contrast}%) hue-rotate(${state.huerotate}deg) sepia(${state.sepia}%)`;
  ctx.filter = filter;

  ctx.save();
  if (state.flipX === -1) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  if (state.flipY === -1) {
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);
  }

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.restore();

  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'edited-image.png';
  link.click();
}

downloadBtn.addEventListener('click', downloadEditedImage);

updateDisplayValues();
updateFilterStyles();
