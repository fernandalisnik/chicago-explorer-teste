function setFilter(el) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }

  function doCheckin(btn, heartsId) {
    btn.classList.add('done');
    btn.innerHTML = '<i class="ti ti-circle-check"></i>Check-in';
    const c = document.getElementById(heartsId);
    c.innerHTML = [1,2,3,4,5].map(n =>
      `<span class="heart-rate" onclick="rate('${heartsId}',${n})">♥</span>`
    ).join('');
    c.classList.add('visible');
  }

  function rate(id, n) {
    document.getElementById(id).querySelectorAll('.heart-rate').forEach((h,i) => {
      h.classList.toggle('on', i < n);
    });
  }
