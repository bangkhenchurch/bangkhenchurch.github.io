(function() {
    // 1. ล้างค่าฟังก์ชันหรือตัวแปรเก่าที่อาจผูกกับ window เพื่อป้องกันการซ้ำซ้อน
    window.toggleAddress = null;

    // 2. รวบรวม CSS สไตล์ทั้งหมดของระบบ Footer
    const customStyle = `
    <style>
        /* CSS เมนูนำทางแนวนอน */
        .custom-footer-menu {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 10px !important;
            margin: 0 auto !important;
            max-width: 900px !important;
            list-style: none !important;
        }
        .custom-footer-menu a {
            display: inline-block !important;
            font-family: 'Prompt', sans-serif !important;
            font-size: 15px !important;
            color: #eeeeee !important;
            text-decoration: none !important;
            padding: 8px 16px !important;
            border-radius: 20px !important;
            background: #1e1e1e !important;
            border: 1px solid #333 !important;
            transition: all 0.3s ease !important;
            white-space: nowrap !important;
        }
        .custom-footer-menu a:hover {
            background: #4dabff !important;
            color: #ffffff !important;
            border-color: #4dabff !important;
            box-shadow: 0 4px 10px rgba(77, 171, 255, 0.3) !important;
        }

        /* CSS Grid สำหรับกล่อง LINE Official และ ช่องทางถวายเงิน */
        .action-grid {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
            gap: 20px !important;
            margin-bottom: 30px !important;
        }
        .action-box {
            background: #1e1e1e !important;
            padding: 25px !important;
            border-radius: 15px !important;
            border: 1px solid #333 !important;
            text-align: center !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
        }
        .btn-line-link {
            font-family: 'Prompt', sans-serif !important;
            background: #25d366 !important;
            color: white !important;
            padding: 10px 20px !important;
            border-radius: 8px !important;
            font-weight: bold !important;
            transition: opacity 0.2s !important;
        }
        .btn-line-link:hover {
            opacity: 0.9 !important;
        }
    </style>
    `;

    // 3. รวบรวมโครงสร้าง HTML ทั้งหมดของ Footer (เว้นที่ไว้ให้ Histats)
    const footerHTML = customStyle + `
    <div style="max-width: 1300px; margin: auto; padding: 40px 20px 0 20px;">
        
        <div class="rating-form" style="background: #1e1e1e; padding: 25px; border-radius: 15px; margin-bottom: 30px; border: 1px solid #333;">
            <h3 style="font-family: 'Prompt'; color: white; margin-bottom: 15px;">⭐️ ให้คะแนนและแบ่งปันพระพร</h3>
            <select id="uStars" class="u-input" style="width: 100%; padding: 12px; margin-bottom: 12px; border-radius: 8px; background: #2a2a2a; color: #f1c40f; border: 1px solid #444; font-size: 16px;">
                <option value="5">⭐⭐⭐⭐⭐ (ยอดเยี่ยม)</option>
                <option value="4">⭐⭐⭐⭐ (ดีมาก)</option>
                <option value="3">⭐⭐⭐ (ดี)</option>
                <option value="2">⭐⭐ (พอใช้)</option>
                <option value="1">⭐ (ควรปรับปรุง)</option>
            </select>
            <input type="text" id="uName" class="u-input" style="width: 100%; padding: 12px; margin-bottom: 12px; border-radius: 8px; background: #2a2a2a; color: white; border: 1px solid #444;" placeholder="ชื่อของคุณ">
            <textarea id="uMsg" class="u-input" rows="3" style="width: 100%; padding: 12px; margin-bottom: 12px; border-radius: 8px; background: #2a2a2a; color: white; border: 1px solid #444;" placeholder="เขียนความประทับใจของคุณ..."></textarea>
            <button id="submitRatingBtn" style="width: 100%; padding: 15px; background: #4dabff; color: white; border: none; border-radius: 8px; cursor: pointer; font-family: 'Prompt'; font-weight: 600;">ส่งความคิดเห็น</button>
        </div>

        <div class="action-center-section">
            <div class="action-grid">
                <div class="action-box" style="border-top: 4px solid #25d366;">
                    <div class="action-title" style="color: #25d366; font-family: 'Prompt'; font-weight: bold; font-size: 18px;">🟢 ช่องทาง LINE Official</div>
                    <div class="action-desc" style="font-family: 'Sarabun'; color: #ccc; margin: 8px 0 15px 0; font-size: 14px;">สแกนคิวอาร์โค้ดเพื่อรับข่าวสารและบทความหนุนใจ</div>
                    <div class="action-image-box" onclick="window.open('https://lin.ee/t3ASqcu', '_blank')" style="cursor: pointer; margin-bottom: 15px;">
                        <img src="line-qr.png" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://lin.ee/t3ASqcu'" style="width: 150px; border-radius: 8px;">
                    </div>
                    <a href="https://lin.ee/t3ASqcu" target="_blank" class="btn-line-link" style="text-decoration: none; display: inline-block;">💬 กดเพิ่มเพื่อนใน LINE</a>
                </div>

                <div class="action-box" style="border-top: 4px solid #4dabff;">
                    <div class="action-title" style="color: #4dabff; font-family: 'Prompt'; font-weight: bold; font-size: 18px;">⛪ ช่องทางสนับสนุนและร่วมรับใช้</div>
                    <div class="action-desc" style="font-family: 'Sarabun'; color: #ccc; margin: 8px 0 15px 0; font-size: 14px;">ท่านสามารถร่วมสนับสนุนพันธกิจคริสตจักรผ่านการถวายเงิน</div>
                    <div class="action-image-box" style="margin-bottom: 10px;">
                        <img src="bbk_church.png" onerror="this.src='https://cdn-icons-png.flaticon.com/512/4221/4221711.png'" style="width: 60px;">
                    </div>
                    <div class="bank-details" style="font-family: 'Sarabun'; color: #eee; line-height: 1.6; font-size: 14px;">
                        ท่านสามารถร่วมสนับสนุนหรือรับใช้<br>
                        โดยการถวายเงินผ่านธนาคารได้ที่<br>
                        <strong>ธนาคารกรุงเทพ สาขาบางเขน</strong><br>
                        ประเภทบัญชี: บัญชีออมทรัพย์<br>
                        เลขที่บัญชี: <span class="bank-highlight" style="color: #4dabff; font-weight: bold; font-size: 16px;">161-5-36894-9</span><br>
                        ชื่อบัญชี: <strong>คริสตจักรแบ๊พติสต์บางเขน</strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-support-section" style="text-align: center; margin: 25px 0;">
            <a href="ads.html" class="img-banner-link">
                <img src="banner02.png" alt="หนังสือ & สื่อเพลงคริสเตียน" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            </a>
        </div>

        <div style="text-align: center; margin-bottom: 30px; padding: 40px 20px; background: #1e1e1e; border: 1px solid #333; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); max-width: 600px; margin: 40px auto;">
            <h2 style="font-family: 'Prompt'; color: #4dabff; margin-bottom: 10px;">💬 ติดต่อคริสตจักร</h2>
            <p style="font-family: 'Sarabun'; color: #eeeeee; font-size: 18px; margin-bottom: 25px; line-height: 1.6;">
                <b>...โปรดสแกน QR Code ด้านล่างนี้...</b><br>
                เพื่อบอกความต้องการของคุณให้เราทราบ
            </p>
            
            <div style="margin-bottom: 25px;">
                <a href="https://lin.ee/QSq98F6" target="_blank">
                    <img src="https://qr-official.line.me/gs/M_082xyooj_BW.png?oat_สารบัญ" alt="LINE" style="width: 180px; border: 5px solid #2a2a2a; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); background: #000000;">
                </a>
            </div>

            <div style="background: #181818; padding: 15px; border: 1px solid #2d2d2d; border-radius: 12px; display: inline-block; text-align: left;">
                <p style="font-family: 'Prompt'; color: #4dabff; margin: 0; font-size: 14px; line-height: 1.6;">
                    📍 <b style="color: #fff;">ท่านสามารถแจ้งความต้องการได้ทันที เช่น:</b><br>
                    • สนใจมาร่วมคริสตจักร<br>
                    • ต้องการศึกษาพระคัมภีร์ที่บ้าน<br>
                    • ขอคำปรึกษาหรือให้เราอธิษฐานเผื่อ
                </p>
            </div>
            
            <div style="margin-top: 30px; border-top: 1px solid #333; padding-top: 20px;">
                <h3 style="margin-bottom: 10px; font-family: 'Prompt'; color: #666; font-size: 12px; font-weight: 400;">สถิติผู้เยี่ยมชม</h3>
                <a href="https://info.flagcounter.com/iWY4" style="display: inline-block; max-width: 100%;">
                    <img src="https://s01.flagcounter.com/countxl/iWY4/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_20/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" style="max-width: 100%; height: auto; display: block; border: 0;">
                </a>
            </div>
        </div>

    </div> 

    <div class="marquee-box" style="margin-top: 30px; text-align: center;">
        <marquee scrollamount="5" style="color: #4dabff; font-family: 'Prompt'; font-size: 16px; max-width: 600px; margin: 0 auto;">
            เพราะว่าพระเจ้าทรงรักโลก จนได้ทรงประทานพระบุตรองค์เดียวของพระองค์ เพื่อทุกคนที่วางใจในพระบุตรนั้นจะไม่พินาศ แต่มีชีวิตนิรันดร์ — ยอห์น 3:16 
        </marquee>
    </div>

    <div style="margin-top: 20px; margin-bottom: 10px; text-align: center !important;">
        <div style="text-align: center; color: #4dabff; font-family: 'Prompt'; font-size: 13px; margin-bottom: 5px;">
            <sup>🌐 เมนูนำทางคริสตจักร (Navigation)</sup>
        </div>
        <nav class="custom-footer-menu">
            <a href="index.html">🏠 หน้าแรก</a>
            <a href="sermons.html">🎙️ คำเทศนา</a>
            <a href="blogs.html">📖 บทความ</a>
            <a href="testimony.html">🙏 คำพยาน</a>
            <a href="news.html">📢 ข่าวสาร</a>
            <a href="ads.html" style="color: #ffcc00 !important; border-color: rgba(255,204,0,0.3) !important;">📖 โฆษณา</a>
            <a href="contact.html">📞 ติดต่อเรา</a>
        </nav>
    </div>

    <div id="histats_counter" style="text-align: center; margin-top: 20px; margin-bottom: 5px; min-height: 50px;"></div>

    <footer style="background: #0a2c6d; color: white; text-align: center; padding: 60px 20px; border-top: 6px solid #4dabff; margin-top: 15px;">
        <img src="logo.png" onerror="this.src='logo.png'" style="width: 80px; border-radius: 50%; margin-bottom: 20px; border: 2px solid rgba(255,255,255,0.2);">
        <br>
        <strong style="font-family:'Prompt'; font-size: 24px; display: block; margin-bottom: 15px; letter-spacing: 1px;">คริสตจักรแบ๊พติสต์บางเขน</strong>
        
        <div style="max-width: 700px; margin: 0 auto; line-height: 1.8; font-family: 'Sarabun'; font-size: 16px;">
            <p style="margin-bottom: 10px;">🕒 <b style="color: #4dabff;">เวลานมัสการ:</b> ทุกวันอาทิตย์ เวลา 09.00 - 12.00 น.</p>
            <p style="margin-bottom: 10px;">📍 2172/145-147 ซอยพหลโยธิน 36 ถนนพหลโยธิน<br>แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900</p>
            <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px; display: inline-block;">
                <p style="font-size: 22px; color: #4dabff; font-weight: bold; margin: 0;">📞 โทร: 02-579-8764</p>
            </div>
        </div>
        
        <div style="margin-top: 40px; font-size: 13px; opacity: 0.4;">
            © 2026 Bangkhen Baptist Church | All Rights Reserved
        </div>
    </footer>
    `;

    // 4. แทรกลงในส่วนท้ายสุดของ Tag <body>
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // 5. โหลดสคริปต์ของ Histats หลังจากที่จัดหน้าเสร็จสิ้น
    window._Hasync = window._Hasync || [];
    window._Hasync.push(['Histats.start', '1,4414180,4,408,270,55,00011111']);
    window._Hasync.push(['Histats.fasi', '1']);
    window._Hasync.push(['Histats.track_hits', '']);

    var hs = document.createElement('script'); 
    hs.type = 'text/javascript'; 
    hs.async = true;
    hs.src = 'https://s10.histats.com/js15_as.js';
    
    // ตรวจสอบความพร้อมของหน้าจอก่อนทำการติดตั้งสคริปต์สถิติ
    var targetHeader = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
    if (targetHeader) {
        targetHeader.appendChild(hs);
    }

    // 6. ระบบบันทึกฟังก์ชันทำงานหลังการ Render (Event Listener ของฟอร์มรีวิว)
    const submitBtn = document.getElementById('submitRatingBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            const stars = document.getElementById('uStars').value;
            const name = document.getElementById('uName').value.trim();
            const msg = document.getElementById('uMsg').value.trim();

            if (!name || !msg) {
                alert('กรุณากรอกชื่อและความประทับใจของคุณให้ครบถ้วนนะครับ');
                return;
            }

            alert(`ขอบคุณคุณ ${name} ที่ร่วมแบ่งปันพระพรให้แก่เรา! \nคะแนนที่คุณให้: ${stars} ดาว`);
            
            document.getElementById('uName').value = '';
            document.getElementById('uMsg').value = '';
        });
    }
})();
