import os
import time
import urllib.request

# Dossier de destination
output_dir = r"C:\Users\junis\OneDrive\Bureau\ScentQuizz\images"
os.makedirs(output_dir, exist_ok=True)

parfums = [
    ("p001", "33519"), ("p002", "12377"), ("p003", "9807"),
    ("p004", "4083"),  ("p005", "10172"), ("p006", "40374"),
    ("p007", "15849"), ("p008", "27736"), ("p009", "64609"),
    ("p010", "3905"),  ("p011", "4086"),  ("p012", "36175"),
    ("p013", "58198"), ("p014", "1551"),  ("p015", "26444"),
    ("p016", "38954"), ("p017", "28778"), ("p018", "55161"),
    ("p019", "47529"), ("p020", "28456"), ("p021", "26315"),
    ("p022", "16978"), ("p023", "7135"),  ("p024", "30232"),
    ("p025", "466"),   ("p026", "18581"), ("p027", "5521"),
    ("p028", "1148"),  ("p029", "49521"), ("p030", "38208"),
    ("p031", "892"),   ("p032", "39047"), ("p033", "9161"),
    ("p034", "357"),   ("p035", "21932"), ("p036", "20914"),
    ("p037", "19852"), ("p038", "48468"), ("p039", "56108"),
    ("p040", "987"),   ("p041", "892"),   ("p042", "60867"),
    ("p043", "8997"),  ("p044", "21919"), ("p045", "149"),
    ("p046", "56038"), ("p047", "39688"), ("p048", "1016"),
    ("p049", "28869"), ("p050", "2693"),  ("p051", "16598"),
    ("p052", "59163"), ("p053", "23277"), ("p054", "4740"),
    ("p055", "44743"), ("p056", "44281"), ("p057", "52342"),
    ("p058", "26219"), ("p059", "845"),   ("p060", "25324"),
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
}

ok = 0
errors = []

for pid, fid in parfums:
    url = f"https://fimgs.net/mdimg/perfume/375x500.{fid}.jpg"
    dest = os.path.join(output_dir, f"{pid}.jpg")

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r:
            data = r.read()
        with open(dest, "wb") as f:
            f.write(data)
        print(f"✅ {pid}.jpg")
        ok += 1
    except Exception as e:
        print(f"❌ {pid} — {e}")
        errors.append(pid)

    time.sleep(0.5)

print(f"\n✅ {ok}/60 téléchargés dans {output_dir}")
if errors:
    print(f"❌ Erreurs : {', '.join(errors)}")