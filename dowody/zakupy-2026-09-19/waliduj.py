#!/usr/bin/env python3
"""Waliduj: suma pozycji == kwota do zapłaty na każdym dokumencie."""
import json, sys
from pathlib import Path
from decimal import Decimal

data = json.loads(Path(__file__).with_name("rachunki.json").read_text())
ok = True
for p in data["paragony"]:
    s = sum(Decimal(str(x["kwota"])) for x in p["pozycje"])
    s = s.quantize(Decimal("0.01"))
    target = Decimal(str(p["sumaParagonu"])).quantize(Decimal("0.01"))
    mark = "OK" if s == target else "BŁĄD"
    print(f"{mark} {p["id"]}: {s} vs {target}")
    if s != target:
        ok = False
print(f"Razem dokumentów: {len(data["paragony"])}, suma: {data["sumaCalkowita"]}")
sys.exit(0 if ok else 1)
