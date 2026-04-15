const input = document.getElementById('user-input');
const output = document.getElementById('output');

const input = document.getElementById('user-input');
const output = document.getElementById('output');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase(); // Ambil input
        const line = document.createElement('p');
        line.innerHTML = `<span class="prompt">R3X@X3:~$</span> ${cmd}`;
        output.appendChild(line);

        const response = document.createElement('p');
        
        // --- LOGIKA PERINTAH DISINI ---
        switch(cmd) {
            case 'help':
                response.innerHTML = "List Perintah: <br> - <b>store</b>: Buka Toko Digital <br> - <b>inject</b>: Jalankan Script Game <br> - <b>clear</b>: Bersihkan Terminal <br> - <b>exit</b>: Keluar";
                break;
            case 'store':
                response.innerText = "Membuka link toko R3X...";
                // Ganti link di bawah ini sama link jualan lo
                window.open('https://instagram.com/zakialfian221', '_blank'); 
                break;
            case 'inject':
                response.innerHTML = "<span style='color: red;'>[!] WARNING: Sedang menghubungkan ke server game...</span><br>[+] Injecting DLL... Done.";
                break;
            case 'clear':
                output.innerHTML = '';
                response.innerText = "Console cleared.";
                break;
            case '':
                response.innerText = "";
                break;
            default:
                response.innerText = `'${cmd}' nggak dikenal. Ketik 'help' buat daftar perintah, R3X.`;
        }
        
        output.appendChild(response);
        input.value = ''; // Kosongin input lagi
        
        // Auto scroll ke bawah
        const body = document.getElementById('console');
        body.scrollTop = body.scrollHeight;
    }
});
});
